import React from "react";
import s from "./Header.module.scss";
import { Navigation } from "../Navigation/Index";

const Header = () => {
  return (
    <div className={s.container}>
      <div>
        <a href="#">
          <img className={s.logo} src="../img/logo.svg" alt="LOGO" />
        </a>
      </div>
      <Navigation />
    </div>
  );
};

export { Header };
