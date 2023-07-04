import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setIsLoading(true);
    axios
      .get(url, { signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        if (axios.isCancel(err)) console.warn("Axios request aborted");
        console.error("Error fetching video data:", err);
      })
      .finally(() => setIsLoading(false));

    return function cleanUp() {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}
