import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function Chart() {
  const containerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(containerRef.current, {
      width: 800,
      height: 500,
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries);

    candlestickSeries.setData([
      {
        time: "2018-12-31",
        open: 109.87,
        high: 114.69,
        low: 85.66,
        close: 111.26,
      },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={containerRef} />;
}
