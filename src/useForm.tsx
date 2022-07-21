import React, { useEffect, useState } from "react";
import { errorProps, valuesProps } from "./validate";

export const useForm = (
  callback: () => void,
  initialFormValues: valuesProps,
  validate: (values: valuesProps) => errorProps
) => {
  const [errors, setErrors] = useState<errorProps>({});
  const [values, setValues] = useState(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

    console.log(values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return { errors, values, handleSubmit, handleChange };
};
