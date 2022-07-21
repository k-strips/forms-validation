import React from "react";
import { fields } from "./formFields";
import { useForm } from "./useForm";
import validateInfo from "./validate";

export const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const onSubmit = () => {
    console.log("I eas");
  };
  const { errors, handleSubmit, handleChange, values } = useForm(
    onSubmit,
    initialValues,
    validateInfo
  );

  return (
    <form onSubmit={handleSubmit}>
      {fields?.map((f, i) => {
        return (
          <div key={i}>
            <label>{f.name}</label>
            <input
              type={f.type}
              name={f.name}
              onChange={handleChange}
              value={values[f.name]}
            />
            <small>{errors[f.name] && errors[f.name]}</small>
          </div>
        );
      })}
      <button>submit</button>
    </form>
  );
};
