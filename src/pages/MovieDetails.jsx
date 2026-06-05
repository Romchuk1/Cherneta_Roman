import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>

      <p>Жанр: {movie.genre}</p>

      <p>Рейтинг: {movie.rating}</p>

      <p>Опис: {movie.description}</p>
    </div>
  );
}

export default MovieDetails;