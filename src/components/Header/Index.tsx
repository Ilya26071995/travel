import { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { Navigation } from "../Navigation/Index";
import { Link } from "react-router-dom";

const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBackgroundColor("rgba(220, 212, 212, 0.6)");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: backgroundColor,
    padding: "25px 50px",
    transition: "background-color 0.3s ease",
    width: "94%",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div className={s.container} style={navStyle}>
      <div>
        <Link to="/home">
          <img className={s.logo} src="../img/logo.svg" alt="LOGO" />
        </Link>
      </div>
      <Navigation />
    </div>
  );
};

export { Header };
