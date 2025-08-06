import React from "react";
import s from "./Header.module.scss";
import { Navigation } from "../Navigation/Index";

const Header = () => {
  return (
    <div>
      <div>
        <img src="../img/logo.svg" alt="LOGO" />
      </div>
      <Navigation />
    </div>
  );
};

export { Header };
