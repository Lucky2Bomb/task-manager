export const useInputState = (
  value: string,
  setValue: (value: string) => void,
) => {
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
