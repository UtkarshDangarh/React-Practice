import { useEffect, useState } from "react";

function useFetchData(url) {
  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const data = await fetch(url);
    const json = await data.json();
    setResData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { resData, loading };
}

export default useFetchData;
