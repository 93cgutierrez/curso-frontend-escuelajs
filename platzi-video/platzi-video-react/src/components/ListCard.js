import React, { Component } from 'react';
import './styles/ListCard.css';
import Card from './Card';

function ListCard(props) {
	return (
		<section className="carousel">
			<div className="carousel__container">
				<ul className="list-unstyled">
					{props.items.map((item) => {
						return (
							<Card
								key={item.id}
								imageUrl={item.imageUrl}
								title={item.title}
								subtitle={item.subtitle}
							/>
						);
					})}
				</ul>

				{/* 		<Card
					imageUrl={
						'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
					}
					title={'TITULO'}
					subtitle={'2019 16+ 114 minutos'}></Card>
				<Card
					imageUrl={
						'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
					}
					title={'TITULO'}
					subtitle={'2019 16+ 114 minutos'}></Card> */}
			</div>
		</section>
	);
}

export default ListCard;
