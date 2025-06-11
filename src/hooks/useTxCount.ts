import { useEffect, useState } from 'react';
import { axiosClassic } from '../services/api/axios';

export const useTxCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosClassic.get('/api/transactions');

        console.log(response.data.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { count, loading, error };
};
