import pandas as pd
import numpy as np


def generate_signals(data: pd.DataFrame, short_window: int, long_window: int) -> pd.DataFrame:
    """Generate trading signals based on moving average crossover."""
    signals = pd.DataFrame(index=data.index)
    signals['signal'] = 0

    signals['short_mavg'] = data['Close'].rolling(window=short_window, min_periods=1).mean()
    signals['long_mavg'] = data['Close'].rolling(window=long_window, min_periods=1).mean()

    signals.loc[:, 'signal'] = 0
    # Use .iloc for positional slicing
    signals.iloc[short_window:, signals.columns.get_loc('signal')] = np.where(
        signals['short_mavg'].iloc[short_window:] > signals['long_mavg'].iloc[short_window:],
        1,
        0,
    )
    signals['positions'] = signals['signal'].diff()
    return signals


def print_signals(signals: pd.DataFrame, long_window: int):
    """Print trade actions for the next day after the signal occurs."""
    for idx, (date, row) in enumerate(signals.iterrows(), start=long_window + 1):
        if row['positions'] == 1:
            print(f"Day {idx} ({date.date()}): BUY on next open")
        elif row['positions'] == -1:
            print(f"Day {idx} ({date.date()}): SELL on next open")


if __name__ == "__main__":
    # Example usage with dummy data
    np.random.seed(0)
    dates = pd.date_range('2024-01-01', periods=30, freq='D')
    prices = pd.Series(np.linspace(100, 110, num=30) + np.random.randn(30), index=dates)
    df = pd.DataFrame({'Close': prices})

    short_w = 3
    long_w = 10
    sigs = generate_signals(df, short_w, long_w)
    print_signals(sigs, long_w)
