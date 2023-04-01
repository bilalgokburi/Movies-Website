import { object, string, number, date, InferType, ref } from "yup";

const validations = object({
  firstName: string().matches(/^[A-Za-z ]*$/, 'Please enter valid name')
  .max(40).required("Please enter your name."),
  lastName: string().matches(/^[A-Za-z ]*$/, 'Please enter valid surname')
  .max(40).required("Please enter your surname."),
  phone_number: number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  email: string()
    .email("Please enter a valid email.")
    .required("Please enter your e-mail."), // içlerini doldurarak error mesajlarını özelleştirebilirim.
  password: string()
    .min(8, "Password sohuld be min 8 character.")
    .required("Please enter your e-mail."),
  passwordConfirm: string()
    .oneOf([ref("password")], "Passwords does not match.")
    .required("Please confirm your password."),
});

//

export default validations;
