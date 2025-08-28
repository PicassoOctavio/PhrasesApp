import { useState, type ChangeEvent } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    const auxvalue = value.replace(/\s+/g, " ").trim();

    setFormState({
      ...formState,
      [name]: auxvalue,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
