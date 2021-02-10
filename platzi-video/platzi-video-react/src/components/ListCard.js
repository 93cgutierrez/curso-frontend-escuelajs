import React, { Component } from 'react';
import './styles/ListCard.css';
import Card from './Card';

function ListCard(props) {
	return props.items ? (
		<section className="carousel">
			<div className="carousel__container">
				<ul className="list-unstyled">
					{props.items.map((item) => {
						return (
							<Card
								key={item.id}
								imageUrl={item.cover}
								title={item.title}
								subtitle={`${item.year} ${item.contentRating} ${item.duration} minutos`}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	) : (
		<h1>SIN DATOS</h1>
	);
}

export default ListCard;
