import Userfront, { LoginForm, SignupForm } from "@userfront/toolkit";
import { Button } from "../Button/Index";
import { useState } from "react";
import s from "./LoginForm.module.scss";
import { useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const LogForm = () => {
  const { Theme } = useSelector((state: ThemeState) => state);
  const [registration, setRegistration] = useState(true);

  if (!registration) {
    return (
      <div className={Theme.type ? s.container : s.containerDark}>
        <SignupForm />
        <div className={s.button}>
          <Button title="back" click={() => setRegistration(!registration)} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={Theme.type ? s.container : s.containerDark}>
        <LoginForm />
        <div className={s.button}>
          {Userfront.tokens.accessToken ? null : (
            <Button
              title="registration"
              click={() => setRegistration(!registration)}
            />
          )}
        </div>
      </div>
    );
  }
};

export { LogForm };
