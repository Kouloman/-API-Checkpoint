import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDescription from './components/MovieDescription';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un thriller de science-fiction sur les rêves partagés.",
      posterURL: "",
      note: 8.8,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Interstellar",
      description: "Un voyage épique dans l'espace pour sauver l'humanité.",
      posterURL: "",
      note: 9.0,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterNote, setFilterNote] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterNote === '' || movie.note >= parseFloat(filterNote))
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Liste des Films</h1>
              <Filter
                setFilterTitle={setFilterTitle}
                setFilterNote={setFilterNote}
                onAddMovie={handleAddMovie}
              />
              <MovieList movies={filteredMovies} />
            </div>
          }
        />
        <Route
          path="/movie/:title"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;