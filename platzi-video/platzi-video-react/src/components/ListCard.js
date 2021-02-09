import React, { Component } from 'react';
import './styles/ListCard.css';
import Card from './Card';

class ListCard extends Component {
	render() {
		return (
			<section className="carousel">
				<div className="carousel__container">
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</div>
			</section>
		);
	}
}

export default ListCard;
