# AutoTrader App
AutoTrader React Uygulaması.

## Moving Average Strategy

`moving_average_strategy.py` dosyası, basit hareketli ortalama (SMA) kesişimine
dayalı alım/satım sinyalleri üretir. Sinyaller ertesi gün uygulanacak şekilde
hesaplanır ve şu şekilde yazdırılır:

```
$ python3 moving_average_strategy.py
Day 14 (2024-01-04): BUY on next open
Day 18 (2024-01-08): SELL on next open
Day 19 (2024-01-09): BUY on next open
```

Kodda `enumerate` fonksiyonu `long_window + 1` değeri ile başlatılır, bu
sinyallerin ertesi gün gerçekleştirileceği anlamına gelir.
