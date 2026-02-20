import { use, useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function Chart() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    const response = await fetch("https://core-trade-two.vercel.app/get_current_price");
    try {
        if (!response.ok) {
      console.log("an error occured fetching data")
    }
    const json_res = response.json();
    setData(json_res)
    } catch (err) {
      console.log("an error occured")
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    <p>Loading Data....</p>
  }

  if (error) {
    <p>{error}</p>
  }
  return (
    <div>
      <p>Test Endpoint</p>
      <button>Hit endpoint</button>
      {data && (
        <p>{data}</p>
      )}
    </div>
  );
}