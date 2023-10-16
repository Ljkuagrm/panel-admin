import { useState } from "react";

// Mandar un prop cuando se usa el form
export const useForm = (initialForm = {}) => {

  // cambiar el valor de useState
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
