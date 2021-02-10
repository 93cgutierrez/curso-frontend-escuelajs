import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';
import playIcon from '../images/play-icon.png';
import plusIcon from '../images/plus-icon.png';

function Card(props) {
	return (
		<div className="carousel-item">
			<img
				className="carousel-item__img"
				src={props.imageUrl}
				alt="Imagen Card"
			/>
			<div className="carousel-item__details">
				<div>
					<img
						className="carousel-item__details--img"
						src={playIcon}
						alt="Play Icon"
					/>
					<img
						className="carousel-item__details--img"
						src={plusIcon}
						alt="Plus Icon"
					/>
				</div>
				<p className="carousel-item__details--title">{props.title}</p>
				<p className="carousel-item__details--subtitle">{props.subtitle}</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};

export default Card;
