import React from "react";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { LoginForm } from "../../components/LoginForm/Index";
import { Footer } from "../../components/Footer/Index";

const Login = () => {
  return (
    <div>
      <ImageBlock />
      <LoginForm />
      <Footer />
    </div>
  );
};

export { Login };
