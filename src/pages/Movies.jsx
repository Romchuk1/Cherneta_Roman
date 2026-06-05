import { useEffect, useState, useContext } from 'react';

import AppContext from '../context/AppContext';

import MovieList from '../components/MovieList';

function Movies() {
  const { movies, setMovies } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setError('');
      })
      .catch(() => {
        setError('Помилка завантаження');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteMovie = (id) => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setMovies(
          movies.filter(movie => movie.id !== id)
        );
      });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Список фільмів</h2>

      <MovieList
        movies={movies}
        onDelete={deleteMovie}
      />
    </div>
  );
}

export default Movies;