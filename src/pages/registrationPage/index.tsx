import React from "react";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { Footer } from "../../components/Footer/Index";
import { RegistrationForm } from "../../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <ImageBlock />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export { RegistrationPage };
