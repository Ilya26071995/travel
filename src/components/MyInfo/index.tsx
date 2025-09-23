import React, { use, useState } from "react";
import s from "./MyInfo.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MyInfoSchema } from "../../validation";
import { InfoState, MyInfoType } from "../../Types";
import { Button } from "../Button/Index";
import { useDispatch, useSelector } from "react-redux";
import { EnterProfile } from "../../store/slices/mymyInfo.slice";
import { t } from "i18next";

const MyInfo = () => {
  const dispatch = useDispatch();
  const { Info } = useSelector((state: InfoState) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(MyInfoSchema),
  });

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    city: "",
    text: "",
    type: 1,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const click = () => {
    setProfile({ ...profile, type: 2 });
    dispatch(EnterProfile(profile));
    console.log(profile);
  };

  return Info.type === 2 ? (
    <div className={s.bigContainer}>
      <ul className={s.profile}>
        <li className={s.item}>
          <h3 className={s.head}>{t("name")}</h3> {Info.name}
        </li>
        <li className={s.item}>
          {" "}
          <h3 className={s.head}>{t("age")}</h3> {Info.age}
        </li>
        <li className={s.item}>
          <h3 className={s.head}>{t("city")}</h3> {Info.city}
        </li>
        <li className={s.item}>
          <h3 className={s.head}>{t("yourself")}</h3>
          {Info.text}
        </li>
      </ul>
    </div>
  ) : (
    <div className={s.bigContainer}>
      <div className={s.container}>
        <h2 className={s.title}>{t("information")}</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={s.label}>
            {t("Yname")}
            <input
              {...register("name")}
              className={s.input}
              type="text"
              placeholder={t("Yname")}
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            ></input>
            <p className={s.error}>{errors.name?.message}</p>
          </label>
          <label className={s.label}>
            {t("Yage")}
            <input
              {...register("age")}
              className={s.input}
              type="text"
              placeholder={t("Yage")}
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            ></input>
            <p className={s.error}>{errors.age?.message}</p>
          </label>
          <label className={s.label}>
            {t("Ycity")}
            <input
              {...register("city")}
              className={s.input}
              type="text"
              placeholder={t("Ycity")}
              value={profile.city}
              onChange={(e) => setProfile({ ...profile, city: e.target.value })}
            ></input>
            <p className={s.error}>{errors.text?.message}</p>
          </label>
          <label className={s.label}>
            {t("yourself")}
            <textarea
              {...register("text")}
              className={s.textarea}
              placeholder={t("yourself")}
              value={profile.text}
              onChange={(e) => setProfile({ ...profile, text: e.target.value })}
            ></textarea>
          </label>
          <Button title={t("send")} type="submit" click={click} />
        </form>
      </div>
    </div>
  );
};

export { MyInfo };
