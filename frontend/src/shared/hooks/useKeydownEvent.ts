import { useEffect } from "react";

export const useKeydownEvent = (fn: (e: KeyboardEvent) => any) => {
  useEffect(() => {
    document.addEventListener("keydown", fn);

    return () => {
      document.removeEventListener("keydown", fn);
    };
  }, []);
};
