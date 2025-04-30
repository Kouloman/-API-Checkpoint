import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie, index) => (
                <div key={index}>
                    <h2>{movie.title}</h2>
                    <p>Note: {movie.note}</p>
                    <Link to={`/movie/${movie.title}`}>Voir la description</Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;