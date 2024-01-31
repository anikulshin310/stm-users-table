import React, { FC, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface IProps {
  onChange: (value: string) => void;
  onReset: () => void;
}

export const Input: FC<IProps> = (props) => {
  const { onChange, onReset } = props;
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 1000);
  const handleReset = () => {
    setValue("");
    onReset();
  };
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);
  return (
    <div>
      <input onChange={handleValueChange} value={value}></input>
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
};
