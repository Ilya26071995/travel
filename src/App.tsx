import React from "react";
import s from "./App.module.scss";
import { Header } from "./components/Header/Index";
import { About } from "./components/About/Index";
import { ImageBlock } from "./components/ImageBlock/Index";
import { Info } from "./components/Info/Index";

function App() {
  return (
    <div>
      <ImageBlock />
      <Info />
    </div>
  );
}

export default App;
