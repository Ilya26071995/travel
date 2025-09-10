import React, { useState } from "react";
import s from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../validation";
import { MyFormState } from "../../Types";
import { Button } from "../Button/Index";
import { useDispatch, useSelector } from "react-redux";
import { EnterForm } from "../../store/notes/login.slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { Form } = useSelector((state: MyFormState) => state);

  const [myForm, setMyForm] = useState({
    name: "",
    mail: "",
    type: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const clickFun = () => {
    setMyForm({ ...myForm, type: true });
    dispatch(EnterForm(myForm));
    console.log(myForm);
  };

  return Form.type === true ? (
    <div className={s.container}>
      <h3 className={s.miniTitle}> Your login</h3>
      <span className={s.miniText}>{Form.mail}</span>
      <h3 className={s.miniTitle}> Your name</h3>
      <span className={s.miniText}>{Form.name}</span>
    </div>
  ) : (
    <div className={s.container}>
      <h2 className={s.title}>Authorization</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label className={s.label}>
          Your name
          <input
            placeholder="Enter name"
            className={s.input}
            type="text"
            {...register("name")}
            onChange={(e) => setMyForm({ ...myForm, name: e.target.value })}
          />
          <p className={s.error}>{errors.name?.message}</p>
        </label>
        <label className={s.label}>
          Your mail
          <input
            placeholder="Enter E-mail"
            className={s.input}
            type="text"
            {...register("mail")}
            onChange={(e) => setMyForm({ ...myForm, mail: e.target.value })}
          />
          <p className={s.error}>{errors.mail?.message}</p>
        </label>
        <Button click={clickFun} type="submit" title="Send"></Button>
      </form>
    </div>
  );
};

export { LoginForm };
