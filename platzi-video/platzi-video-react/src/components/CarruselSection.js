import React, { Fragment } from 'react';
import './styles/CarruselSection.css';

function CarruselSection(props) {
	return (
		<Fragment>
			<h3 className="categories__title">{props.title}</h3>
			{props.children}
		</Fragment>
	);
}
export default CarruselSection;
