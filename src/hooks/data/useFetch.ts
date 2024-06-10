import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetch = <T>(url: string): { loading: boolean; data: T | null; error: Error | null } => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          toast.error(`Error fetching data: ${response.statusText}`);
        }
        const data: T = await response.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
