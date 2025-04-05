"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function useSupabaseQuery<T = any>(
  table: string,
  query = {},
  deps: any[] = []
) {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let queryBuilder = supabase.from(table).select("*");

        const { data, error } = await queryBuilder;

        if (error) {
          throw error;
        }

        setData(data as T[]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, deps);

  return { data, error, loading };
} 