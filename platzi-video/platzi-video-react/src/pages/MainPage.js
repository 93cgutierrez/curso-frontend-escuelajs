import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CarruselSection from '../components/CarruselSection';
import Footer from '../components/Footer';
import ListCard from '../components/ListCard';

class MainPage extends Component {
	constructor(e){
		super(e);
		let listCards = [];
		for (let index = 0; index < 5; index++) {
			listCards.push({
				id: index,
				imageUrl:
					'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
				title: 'TITULO ' + index,
				subtitle: 'SUB',
			});
		}
		let listCards2 = [];
		for (let index = 0; index < 3; index++) {
			listCards2.push({
				id: index,
				imageUrl:
					'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
				title: 'TITULO ' + index,
				subtitle: 'SUB',
			});
		}
	}
	state = {};
	render() {

		return (
			<Fragment>
				<Header></Header>
				<SearchBar></SearchBar>
				<CarruselSection title={'Mi lista'}>
					<ListCard items={this.listCards} />
				</CarruselSection>
				<CarruselSection title={'Mis Favoritos'}>
					<ListCard items={this.listCards2} />
				</CarruselSection>
				<Footer></Footer>
			</Fragment>
		);
	}
}

export default MainPage;
