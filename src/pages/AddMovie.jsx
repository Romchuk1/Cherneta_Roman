import { useContext } from 'react';

import AppContext from '../context/AppContext';

import MovieForm from '../components/MovieForm';

function AddMovie() {
  const { movies, setMovies } = useContext(AppContext);

  const addMovie = (movie) => {
    fetch('http://localhost:3001/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
      .then(data => {
        setMovies([...movies, data]);
      });
  };

  return (
    <div>
      <h2>Додати фільм</h2>

      <MovieForm onAdd={addMovie} />
    </div>
  );
}

export default AddMovie;