import React, { Component } from 'react';
import './styles/ListCard.css';
import Card from './Card';

function ListCard(props) {
	const count = 8;
	return (
		<section className="carousel">
			<div className="carousel__container">
				<ul className="list-unstyled">
					{props.items === null
						? Array.from({ length: count }, (value, key) => (
								<Card key={key} imageUrl={null} title={null} subtitle={null} />
						  ))
						: props.items?.map((item) => {
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
	);
}

export default ListCard;
