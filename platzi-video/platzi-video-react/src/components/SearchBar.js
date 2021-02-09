import React, { Component } from 'react';
import './styles/SearchBar.css';

class SearchBar extends Component {
	render() {
		return (
			<section className="main">
				<h2 className="main__title">¿Qué quieres ver hoy?</h2>
				<input type="text" className="input" placeholder="Buscar..." />
			</section>
		);
	}
}

export default SearchBar;
