import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { axiosClassic } from '../services/api/axios';

export function useFetch<T = unknown>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    axiosClassic(url, config)
      .then(response => {
        if (!isCancelled) {
          setData(response.data);
          setError(null);
        }
      })
      .catch(error => {
        if (!isCancelled) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [url, config]);

  return { data, error, loading };
}
