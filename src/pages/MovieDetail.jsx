import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0cfd12c4414e1ce0813b0890e96f723e`
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <p className="mt-4">{movie.overview}</p>
      <p className="mt-2">Release Date: {movie.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mt-4"
      />
    </div>
  );
};

export default MovieDetail;
