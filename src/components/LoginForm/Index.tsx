import React, { useState } from "react";
import s from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../validation";
import { MyFormState } from "../../Types";
import { Button } from "../Button/Index";
import { useDispatch, useSelector } from "react-redux";
import { EnterForm, ExitForm } from "../../store/slices/login.slice";
import { t } from "i18next";
import { Link } from "react-router-dom";

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
    dispatch(EnterForm(myForm));
    console.log(myForm);
  };

  const exitFun = () => {
    dispatch(ExitForm(myForm));
  };

  return Form.type === true ? (
    <div className={s.success}>
      <h3 className={s.miniTitle}> {t("Ylogin")}</h3>
      <span className={s.miniText}>{Form.mail}</span>
      <h3 className={s.miniTitle}> {t("Yname")}</h3>
      <span className={s.miniText}>{Form.name}</span>
      <Button title={t("exit")} click={exitFun}></Button>
    </div>
  ) : (
    <div className={s.container}>
      <h2 className={s.title}>{t("authorization")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label className={s.label}>
          {t("Yname")}
          <input
            placeholder={t("Yname")}
            className={s.input}
            type="text"
            {...register("name")}
            onChange={(e) => setMyForm({ ...myForm, name: e.target.value })}
          />
          <p className={s.error}>{errors.name?.message}</p>
        </label>
        <label className={s.label}>
          {t("Ymail")}
          <input
            placeholder={t("Ymail")}
            className={s.input}
            type="text"
            {...register("mail")}
            onChange={(e) => setMyForm({ ...myForm, mail: e.target.value })}
          />
          <p className={s.error}>{errors.mail?.message}</p>
        </label>
        <Button click={clickFun} type="submit" title={t("send")}></Button>
        <div className={s.reg}>
          <h3>{t("account")}?</h3>
          <Link className={s.link} to="/registration">
            ...registration
          </Link>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
