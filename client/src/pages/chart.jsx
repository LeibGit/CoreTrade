import { use, useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import "./styles/chart.css"


export default function Chart() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("https://coretrade.onrender.com/get_current_price");
      if (!response.ok) {
      console.log("an error occured fetching data")
    }
    const json_res = await response.json();
    setData(json_res)
    } catch (err) {
      console.log("an error occured")
      setError("An error occured, CHECK CHROME TOOLS TO INSPECT")
    } finally {
      setLoading(false);
    }
  }

  if (loading && !data) {
    return <p>Loading message for wife....</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  if (!loading && !error) {
    return (
      <div className="styling">
        <button onClick={fetchData}>Hit endpoint</button>
        {data && (
          <p>{JSON.stringify(data)}</p>
        )}
      </div>
  );
  }
}