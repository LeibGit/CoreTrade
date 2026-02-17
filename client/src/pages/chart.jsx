import { AreaSeries, CandlestickSeries, createChart } from 'lightweight-charts';

export default function Chart() {
    const chart = createChart(container);

    const areaSeries = chart.addSeries(AreaSeries);
    areaSeries.setData([
        // Other data items
        { time: '2018-12-31', value: 22.67 },
    ]);

    const candlestickSeries = chart.addSeries(CandlestickSeries);
    candlestickSeries.setData([
        // Other data items
        { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
    ]);

    // ...

    // Update the most recent bar
    areaSeries.update({ time: '2018-12-31', value: 25 });
    candlestickSeries.update({ time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 112 });

    // Creating the new bar
    areaSeries.update({ time: '2019-01-01', value: 20 });
    candlestickSeries.update({ time: '2019-01-01', open: 112, high: 112, low: 100, close: 101 });
}