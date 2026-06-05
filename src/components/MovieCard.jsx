import { Link } from 'react-router-dom';

function MovieCard({ movie, onDelete }) {
  return (
    <div>
      <h3>{movie.title}</h3>

      <p>Жанр: {movie.genre}</p>

      <p>Рейтинг: {movie.rating}</p>

      <Link to={`/movies/${movie.id}`}>
        Детальніше
      </Link>

      <br />
      <br />

      <button onClick={() => onDelete(movie.id)}>
        Видалити
      </button>

      <hr />
    </div>
  );
}

export default MovieCard;