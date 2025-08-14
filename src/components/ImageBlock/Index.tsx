import React from "react";
import { About } from "../About/Index";
import { Header } from "../Header/Index";
import s from "./ImageBlock.module.scss";

const ImageBlock = () => {
  return (
    <div className={s.container}>
      <Header />
      <About />
    </div>
  );
};

export { ImageBlock };
