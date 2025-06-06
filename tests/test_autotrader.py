import unittest
from src.autotrader import moving_average, generate_signals

class TestAutoTrader(unittest.TestCase):
    def test_moving_average(self):
        prices = [1, 2, 3, 4, 5]
        self.assertEqual(moving_average(prices, 3), [2.0, 3.0, 4.0])

    def test_generate_signals(self):
        prices = [i for i in range(1, 41)]
        signals = generate_signals(prices, short_window=5, long_window=20)
        # simple increasing sequence should always signal BUY
        self.assertTrue(all(s == 'BUY' for s in signals))

if __name__ == '__main__':
    unittest.main()
