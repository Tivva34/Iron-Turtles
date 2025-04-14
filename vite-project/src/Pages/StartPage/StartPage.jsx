import React from 'react';
import List from '../../Components/List';
import './startPage.css';
import testMovies from '../../data/testMovies';
import MovieCarousel from '../../Components/MovieCarousel/MovieCarousel';

function StartPage() {
	return (
		<>
			<h1>Startpage</h1>
			<MovieCarousel />
			<List movieList={testMovies} />
		</>
	);
}

export default StartPage;
