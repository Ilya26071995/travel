import React from "react";
import { ImageBlock } from "../ImageBlock/Index";
import { Footer } from "../Footer/Index";
import Userfront from "@userfront/toolkit";
import { Button } from "../Button/Index";
import { t } from "i18next";
import s from "./FormOk.module.scss";
import { useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const FormOk = () => {
  const { Theme } = useSelector((state: ThemeState) => state);
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <ImageBlock />
      <div className={Theme.type ? s.container : s.containerDark}>
        <div className={Theme.type ? s.info : s.infoDark}>
          <h2 className={s.title}>{t("success")}</h2>
          <p className={s.mail}>{Userfront.user.email}</p>
          <Button title="logout" click={Userfront.logout}></Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { FormOk };
