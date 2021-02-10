import React, { Component, Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CarruselSection from '../components/CarruselSection';
import Footer from '../components/Footer';
import ListCard from '../components/ListCard';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const MainPage = () => {
	const initialState = useInitialState(API);
	return (
		<Fragment>
			<Header></Header>
			<SearchBar></SearchBar>
			{initialState?.length === 0 && <h1>Cargando...</h1>}

			{initialState.mylist?.length > 0 && (
				<CarruselSection title={'Mi lista'}>
					<ListCard items={initialState.mylist} />
				</CarruselSection>
			)}
			{initialState.trends?.length > 0 && (
				<CarruselSection title={'Tendencia'}>
					<ListCard items={initialState.trends} />
				</CarruselSection>
			)}
			{initialState.originals?.length > 0 && (
				<CarruselSection title={'Originales'}>
					<ListCard items={initialState.originals} />
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
