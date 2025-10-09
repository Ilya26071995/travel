import React from "react";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { Footer } from "../../components/Footer/Index";

import { FormOk } from "../../components/FormOk";

const Profile = () => {
  return (
    <div>
      <ImageBlock />
      <FormOk />
      <Footer />
    </div>
  );
};

export { Profile };
