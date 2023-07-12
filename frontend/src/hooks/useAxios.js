import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(endpoint) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setIsLoading(true);

    axios
      .get(`${BASE_URL}${endpoint}`, { signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        if (axios.isCancel(err)) console.warn("Axios request aborted");
        console.error("Error fetching data from API:", err);
      })
      .finally(() => setIsLoading(false));

    return function cleanUp() {
      controller.abort();
    };
  }, [endpoint]);

  return { data, isLoading, error };
}
