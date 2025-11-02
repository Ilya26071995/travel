import s from "./Button.module.scss";
import { ButtonType, ThemeState } from "../../Types";
import { useSelector } from "react-redux";

const Button = ({ title, click }: ButtonType) => {
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <button className={Theme.type ? s.button : s.buttonDark} onClick={click}>
      {title}
    </button>
  );
};

export { Button };
