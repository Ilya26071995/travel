import React from "react";
import s from "./Registration.module.scss";
import { t } from "i18next";
import { Button } from "../Button/Index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegistrationSchema } from "../../validation";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegistrationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("registration")}</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={s.label}>
          {" "}
          {t("Ymail")}
          <input
            {...register("mail")}
            type="text"
            className={s.input}
            placeholder={t("Ymail")}
          />
        </label>
        <label className={s.label}>
          {" "}
          {t("password")}
          <input
            {...register("password")}
            type="text"
            className={s.input}
            placeholder={t("password")}
          />
        </label>
        <Button title={t("send")} type="submit" />
      </form>
    </div>
  );
};

export { RegistrationForm };
