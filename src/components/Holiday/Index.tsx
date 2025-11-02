import s from "./Holiday.module.scss";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const Holiday = () => {
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <h2 className={s.title}>{t("holiday")}</h2>
    </div>
  );
};

export { Holiday };
