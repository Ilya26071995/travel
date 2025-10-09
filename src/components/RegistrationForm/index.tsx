import { useDispatch, useSelector } from "react-redux";
import { ThemeState } from "../../Types";
import { SignupForm } from "@userfront/toolkit";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div>
      {" "}
      <SignupForm />
    </div>
  );
};

export { RegistrationForm };
