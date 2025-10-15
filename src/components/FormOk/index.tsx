import Userfront from "@userfront/toolkit";
import { Button } from "../Button/Index";
import { t } from "i18next";
import s from "./FormOk.module.scss";
import { useSelector } from "react-redux";
import { ThemeState } from "../../Types";
import { MyInfo } from "../MyInfo";

const FormOk = () => {
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div>
      <div className={Theme.type ? s.container : s.containerDark}>
        <div className={Theme.type ? s.info : s.infoDark}>
          <h2 className={s.title}>{t("success")}</h2>
          <p className={s.mail}>{Userfront.user.email}</p>
          <Button title={t("logout")} click={Userfront.logout}></Button>
        </div>
        <MyInfo />
      </div>
    </div>
  );
};

export { FormOk };
