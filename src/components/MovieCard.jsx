import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">
          Release Date: {movie.release_date}
        </p>
        <Link
          to={`/movie/${movie.id}`}
          className="text-blue-500 mt-2 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
