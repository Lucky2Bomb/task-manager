import { useMemo, useState } from "react";

export const useInput = (startValue: string | number | Date = "") => {
  const convertedValue = useMemo(() => {
    return startValue.toString();
  }, [startValue]);
  const [value, setValue] = useState(convertedValue);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const clearValue = () => {
    setValue("");
  };

  return { input: { value, onChange }, clearValue };
};
