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
    const json_res = await response.json();
    setData(json_res)
    } catch (err) {
      console.log("an error occured")
      setError("An error occured:", err)
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Loading Data....</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  if (!loading && !error) {
    return (
      <div>
        <p>Test Endpoint</p>
        <button onClick={fetchData}>Hit endpoint</button>
        {data && (
          <p>{JSON.stringify(data)}</p>
        )}
      </div>
  );
  }
}