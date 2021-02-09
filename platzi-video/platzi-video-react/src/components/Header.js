import React, { Component } from 'react';
import './styles/Header.css';
import logo from '../images/logo-platzi-video-BW2.png';
import userIcon from '../images/user-icon.png';
class Header extends Component {
	render() {
		return (
			<header className="header">
				<img className="header__img" src={logo} alt="Platzi Video" />
				<div className="header__menu">
					<div className="header__menu--profile">
						<img src={userIcon} alt="Icono usuario" />
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
			</header>
		);
	}
}

export default Header;
