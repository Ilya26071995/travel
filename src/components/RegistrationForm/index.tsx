import React from "react";
import s from "./Registration.module.scss";
import { t } from "i18next";
import { Button } from "../Button/Index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegistrationSchema } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState } from "../../Types";

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

  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <h2 className={s.title}>{t("registration")}</h2>
      <form
        className={Theme.type ? s.form : s.formDark}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={s.label}>
          {" "}
          {t("Ymail")}
          <input
            {...register("mail")}
            type="text"
            className={Theme.type ? s.input : s.inputDark}
            placeholder={t("Ymail")}
          />
        </label>
        <label className={s.label}>
          {" "}
          {t("password")}
          <input
            {...register("password")}
            type="text"
            className={Theme.type ? s.input : s.inputDark}
            placeholder={t("password")}
          />
        </label>
        <Button title={t("send")} type="submit" />
      </form>
    </div>
  );
};

export { RegistrationForm };
