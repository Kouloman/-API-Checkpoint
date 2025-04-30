import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
            <img src={movie.posterURL} alt={movie.title} width="150" />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Note: ⭐ {movie.note}</p>
        </div>
    );
};

export default MovieCard;
