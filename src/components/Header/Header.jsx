import React from "react";
import s from './Header.module.css';
import icon from "../../img/icon.svg"
const Header = () => {
    return  <header className={s.header}>
    <img className={s.icon} src={icon} alt="logo"/>
  </header>
};

export default Header;