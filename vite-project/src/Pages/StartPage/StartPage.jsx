import React from 'react';
import List from '../../Components/List';
import './startPage.css';
import testMovies from '../../data/testMovies';
import MovieCarousel from '../../Components/MovieCarousel/MovieCarousel';
import Header from '../../Components/Header';

function StartPage() {
	return (
		<>
			<Header />
			<MovieCarousel />
			<List movieList={testMovies} />
		</>
	);
}

export default StartPage;
