import { useState } from 'react';

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre || !rating || !description) {
      setError('Заповніть усі поля');
      return;
    }

    const newMovie = {
      title,
      genre,
      rating,
      description
    };

    onAdd(newMovie);

    setTitle('');
    setGenre('');
    setRating('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Назва фільму"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Жанр"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Рейтинг"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">
        Додати фільм
      </button>
    </form>
  );
}

export default MovieForm;