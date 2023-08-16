import React from "react";
import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="container">
      <Logo />
      <HeaderMenu />
      <div className="header_right">
        <Button type="text" value="Log in" />
        <Button type="primary" value="Sign up" />
      </div>
    </header>
  );
};

export default Header;
