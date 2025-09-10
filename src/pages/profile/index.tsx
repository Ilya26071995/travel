import React from "react";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { Footer } from "../../components/Footer/Index";
import { MyInfo } from "../../components/MyInfo";

const Profile = () => {
  return (
    <div>
      <ImageBlock />
      <MyInfo />
      <Footer />
    </div>
  );
};

export { Profile };
