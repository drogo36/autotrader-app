from typing import List


def moving_average(prices: List[float], window: int) -> List[float]:
    """Compute the simple moving average."""
    if window <= 0:
        raise ValueError("window must be positive")
    if len(prices) < window:
        raise ValueError("window is larger than price data")

    averages = []
    current_sum = sum(prices[:window])
    averages.append(current_sum / window)
    for i in range(window, len(prices)):
        current_sum += prices[i] - prices[i - window]
        averages.append(current_sum / window)
    return averages


def generate_signals(prices: List[float], short_window: int = 5, long_window: int = 20) -> List[str]:
    """Generate trading signals based on moving average crossover."""
    if short_window >= long_window:
        raise ValueError("short_window must be less than long_window")
    short_ma = moving_average(prices, short_window)
    long_ma = moving_average(prices, long_window)

    offset = long_window - short_window
    signals = []
    for i in range(len(long_ma)):
        if short_ma[i + offset] > long_ma[i]:
            signals.append("BUY")
        elif short_ma[i + offset] < long_ma[i]:
            signals.append("SELL")
        else:
            signals.append("HOLD")
    return signals

if __name__ == "__main__":
    sample = [100 + i * 0.5 for i in range(40)]
    signals = generate_signals(sample)
    for i, s in enumerate(signals, start=20):
        print(f"Day {i}: {s}")
