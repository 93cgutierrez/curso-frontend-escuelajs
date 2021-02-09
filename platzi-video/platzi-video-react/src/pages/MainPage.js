import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CarruselSection from '../components/CarruselSection';
import Footer from '../components/Footer';

class MainPage extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<Header></Header>
				<SearchBar></SearchBar>
				<CarruselSection></CarruselSection>
				<Footer></Footer>
			</Fragment>
		);
	}
}

export default MainPage;
