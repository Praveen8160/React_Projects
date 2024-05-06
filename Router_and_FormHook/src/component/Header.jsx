import React from "react";
import style from "../style/Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={style.main}>
      <Link to={"/SignIn"}>
        <li>Login</li>
      </Link>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/SignUp"}>
        <li>Signup</li>
      </Link>
    </div>
  );
}

export default Header;
