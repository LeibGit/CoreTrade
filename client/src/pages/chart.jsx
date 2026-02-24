import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import "../styles/chart.css";

export default function Chart() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        "https://coretrade.onrender.com/get_current_price"
      );

      if (!response.ok) {
        console.log("an error occured fetching data");
      }

      const json_res = await response.json();
      setData(json_res);
    } catch (err) {
      console.log("an error occured");
      setError("An error occured, CHECK CHROME TOOLS TO INSPECT");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
  return (
    <div className="styling">
      <p className="loading-text">Loading message for wife… 💌</p>
    </div>
  );
}

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="styling">
      {!data && (
        <button onClick={fetchData}>
          View Message
        </button>
      )}

      {data && <p>{JSON.stringify(data)} - Leib</p>}
    </div>
  );
}