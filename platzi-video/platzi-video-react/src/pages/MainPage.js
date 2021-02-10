import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CarruselSection from '../components/CarruselSection';
import Footer from '../components/Footer';
import ListCard from '../components/ListCard';

class MainPage extends Component {
	state = {
		myist: [],
		trends: [],
	};

	componentDidMount() {
		this.setState({
			mylist: generateDummyList(4),
			trends: generateDummyList(3),
		});
	}

	render() {
		return (
			<Fragment>
				<Header></Header>
				<SearchBar></SearchBar>
				<CarruselSection title={'Mi lista'}>
					<ListCard items={this.state.mylist} />
				</CarruselSection>
				<CarruselSection title={'Tendencia'}>
					<ListCard items={this.state.trends} />
				</CarruselSection>
				<Footer></Footer>
			</Fragment>
		);
	}
}

export default MainPage;

function generateDummyList(x) {
	let listCards = [];
	for (let index = 0; index < x; index++) {
		listCards.push({
			id: index,
			imageUrl:
				'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
			title: 'TITULO ' + index,
			subtitle: 'SUB',
		});
	}
	return listCards;
}
