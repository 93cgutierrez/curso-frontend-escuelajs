import React, { Component, Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CarruselSection from '../components/CarruselSection';
import Footer from '../components/Footer';
import ListCard from '../components/ListCard';

const MainPage = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		try {
			fetch('http://localhost:3000/initialState')
				.then((response) => response.json())
				.then((data) => setVideos(data));
		} catch (error) {
			console.log(`ERROR:: ${error}`);
		}
	}, []);
	console.log(videos);

	return (
		<Fragment>
			<Header></Header>
			<SearchBar></SearchBar>
			{videos.mylist?.length > 0 && (
				<CarruselSection title={'Mi lista'}>
					<ListCard items={videos.mylist} />
				</CarruselSection>
			)}
			{videos.trends?.length > 0 && (
				<CarruselSection title={'Tendencia'}>
					<ListCard items={videos.trends} />
				</CarruselSection>
			)}
			{videos.originals?.length > 0 && (
				<CarruselSection title={'Originales'}>
					<ListCard items={videos.originals} />
				</CarruselSection>
			)}
			<Footer></Footer>
		</Fragment>
	);
};
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
