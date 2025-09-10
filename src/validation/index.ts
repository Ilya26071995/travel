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

export { FormSchema, MyInfoSchema };
