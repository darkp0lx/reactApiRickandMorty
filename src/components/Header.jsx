import React from "react";
import "../assets/styles/Header.scss";
import logo from "../assets/img/logo-b.png";
import { useSelector } from "react-redux";
import userIcon from "../assets/img/user-icon.png";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";

const Header = () => {
  const user = useSelector((store) => store.morty.user);
  const hasUser = Object.keys(user).length > 0;
  console.log(hasUser);
  return (
    <div className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt="user.email" />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">Cerrar Sesión</a>
            </li>
          ) : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
