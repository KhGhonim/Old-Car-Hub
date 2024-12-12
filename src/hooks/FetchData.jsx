import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

const useFetchCarsData = (params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch data:", res.statusText);
          notFound();
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { data, loading, error };
};

export default useFetchCarsData;
