import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

interface ApiResponse<T> {
  response: T[];
  hasMore?: boolean;
}

export function usePaginatedFetch<T>(baseUrl: string, initialPage = 1, limit = 20, config?: AxiosRequestConfig) {
  const [page, setPage] = useState(initialPage);
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean | null>(null);

  const url = `${baseUrl}?page=${page}&pageSize=${limit}`;

  const { data, error, loading } = useFetch<ApiResponse<T>>(url, config);

  useEffect(() => {
    if (data && Array.isArray(data.response)) {
      setHasMore(data.hasMore ?? null);
      setItems(prev => [...prev, ...data.response]);
    } else {
      console.warn('Data is not an array or is null:', data);
    }
  }, [data, limit]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1);
    }
  };

  return { items, error, loading, hasMore, loadMore };
}
