export interface valuesProps {
  [key: string]: string | number;
}

export interface errorProps {
  [key: string]: string;
}

export default function validateInfo(values: valuesProps) {
  let errors: errorProps = {};

  if (typeof values.firstName === "string" && !values.firstName.trim()) {
    errors.firstName = "first name required";
  }

  if (typeof values.lastName === "string" && !values.lastName.trim()) {
    errors.lastName = "last name required";
  }

  if (typeof values.phone === "string" && !values.phone.trim()) {
    errors.phone = "phone required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (typeof values.email === "string" && !values.email) {
    errors.email = "Email required";
  } else if (
    typeof values.email === "string" &&
    !/\S+@\S+\.\S+/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    typeof values.password === "string" &&
    values.password.length < 6
  ) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
