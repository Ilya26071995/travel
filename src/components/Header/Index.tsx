import React from "react";
import s from "./Header.module.scss";
import { Navigation } from "../Navigation/Index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.container}>
      <div>
        <Link to="/">
          <img className={s.logo} src="../img/logo.svg" alt="LOGO" />
        </Link>
      </div>
      <Navigation />
    </div>
  );
};

export { Header };
