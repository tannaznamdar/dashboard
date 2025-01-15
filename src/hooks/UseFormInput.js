import { useState } from "react";

export default function UseFormInput() {
  const [value, setValue] = useState('');

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: onChangeHandler,
  };
}
