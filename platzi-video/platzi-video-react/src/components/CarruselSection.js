import React, { Component, Fragment } from 'react';
import './styles/CarruselSection.css';
import ListCard from './ListCard';

class CarruselSection extends Component {
	render() {
		return (
			<Fragment>
				<h3 className="categories__title">Mi lista</h3>
				<ListCard></ListCard>
			</Fragment>
		);
	}
}

export default CarruselSection;
