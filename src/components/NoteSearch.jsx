import { useContext } from 'react';
import NoteContext from '../context/NoteContext';

function NoteSearch() {
  const { search, setSearch } = useContext(NoteContext);

  return (
    <div>
      <h2>Пошук</h2>

      <input
        type="text"
        placeholder="Пошук нотатки"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default NoteSearch;