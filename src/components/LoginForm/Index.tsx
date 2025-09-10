import React, { useState } from "react";
import s from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../validation";
import { FormType } from "../../Types";
import { Button } from "../Button/Index";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const onSubmit = (data: FormType) => {
    console.log(data);
    reset();
  };

  const [disabled, setDisabled] = useState(true);

  const clickFun = () => {
    setDisabled((disabled) => !disabled);
  };

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Authorization</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label className={s.label}>
          Your name
          <input
            className={s.input}
            type="text"
            {...register("name")}
            onChange={handleInputChange}
          />
          <p className={s.error}>{errors.name?.message}</p>
        </label>
        <label className={s.label}>
          Your mail
          <input
            className={s.input}
            type="text"
            {...register("mail")}
            onChange={handleInputChange}
          />
          <p className={s.error}>{errors.mail?.message}</p>
        </label>
        <input
          className={s.button}
          onClick={clickFun}
          type="submit"
          value="send"
        ></input>
      </form>
    </div>
  );
};

export { LoginForm };
