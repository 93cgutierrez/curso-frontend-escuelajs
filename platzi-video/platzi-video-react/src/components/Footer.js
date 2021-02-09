import React, { Component } from 'react';
import './styles/Footer.css';
class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<a href="/">Terminos de uso</a>
				<a href="/">Declaración de privacidad</a>
				<a href="/">Centro de ayuda</a>
			</footer>
		);
	}
}

export default Footer;
