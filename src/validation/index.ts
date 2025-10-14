import * as yup from "yup";

const FormSchema = yup.object({
  name: yup
    .string()
    .required("Enter name")
    .min(2, "Min 2 letters")
    .max(10, "Max 10 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only"),

  mail: yup
    .string()
    .required("enter e-mail")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)
    .typeError("Enter valid email"),
});

const MyInfoSchema = yup.object({
  name: yup
    .string()
    .required("Enter name")
    .min(2, "Min 2 letters")
    .max(10, "Max 10 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only"),

  age: yup.number().typeError("Only numbers"),
  city: yup
    .string()
    .required("Enter name")
    .min(2, "Min 2 letters")
    .max(10, "Max 10 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only"),

  text: yup.string().min(10, "Min 10 letters").max(100, "Max 100 letters"),
});

const RegistrationSchema = yup.object({
  mail: yup
    .string()
    .required("enter e-mail")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)
    .typeError("Enter valid email"),
  password: yup.string().min(8, "Min 8 letters"),
});

const TripSchema = yup.object({
  city: yup
    .string()
    .required("enter city")
    .min(2, "Min 4 letters")
    .max(10, "Max 20 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only")
    .typeError("Enter city"),
  date: yup.number().typeError("Enter date"),
  hotel: yup
    .string()
    .required("enter hotel")
    .min(2, "Min 4 letters")
    .max(10, "Max 20 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only")
    .typeError("Enter hotel"),
});

export { FormSchema, MyInfoSchema, RegistrationSchema, TripSchema };
