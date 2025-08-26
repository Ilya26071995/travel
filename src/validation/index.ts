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
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/),
});

const NotesSchema = yup.object({
  title: yup.string(),
  text: yup.string(),
});

export { FormSchema, NotesSchema };
