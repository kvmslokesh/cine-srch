import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query = '') => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
