import React from "react";
import { About } from "../About/Index";
import { Header } from "../Header/Index";
import s from "./ImageBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const ImageBlock = () => {
  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <Header />
      <About />
    </div>
  );
};

export { ImageBlock };
