import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
    const { title } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((movie) => movie.title === title);

    if (!movie) {
        return <h2>Film non trouvé</h2>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailerURL}
                title="Bande-annonce"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br />
            <button onClick={() => navigate('/')}>Retour à l'accueil</button>
        </div>
    );
};

export default MovieDescription;