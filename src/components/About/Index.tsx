import s from "./About.module.scss";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const About = () => {
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div>
      <div className={Theme.type ? s.container : s.containerDark}>
        <p className={s.text}>{t("about")}</p>
      </div>
    </div>
  );
};

export { About };
