import { useEffect, useState } from "react";

/**
 * when value constantly changes, this will return a state optimized by debounce
 */
export const useDebounce = <T extends object | string>(
  value: T,
  delay: number = 300
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    console.log(value, delay);
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
