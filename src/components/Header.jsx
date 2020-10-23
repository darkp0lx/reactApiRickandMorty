import React from "react";
import '../assets/styles/Header.scss'
import logo from '../assets/img/logo-platzi-video-BW2.png'
import userIcon from '../assets/img/user-icon.png'
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          className="header__img"
          src={logo}
          alt="Platzi Video"
        />
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={userIcon} alt="" />
            <p>Perfil</p>
          </div>
          <ul>
            <li>
              <a href="/">Cuenta</a>
            </li>
            <li>
              <a href="/">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header