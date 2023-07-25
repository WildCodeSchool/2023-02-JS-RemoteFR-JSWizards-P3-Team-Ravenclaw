import { useState, useEffect } from "react";
import axios from "axios";

import groupVideoCategory from "../helpers/groupVideoCategory";

export default function useAxios(endpoint, refetchFlag = null) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    setIsLoading(true);

    const getData = async (url) => {
      try {
        const res = await axios.get(`${BASE_URL}${url}`, {
          cancelToken: source.token,
        });
        // if fetching videos, remove potential duplicates (multiple categories)
        if (url.includes("videos")) setData(groupVideoCategory(res.data));
        else setData(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error("Error fetching data from API:", err);
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData(endpoint);

    return () => source.cancel(); // cleanup function
  }, [endpoint, refetchFlag]);

  return { data, isLoading, error };
}
