import { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem';

function NoteList() {
  const { notes, deleteNote, search } =
    useContext(NoteContext);

  const filteredNotes = notes.filter((note) =>
    note.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (filteredNotes.length === 0) {
    return <h2>Нотаток немає</h2>;
  }

  return (
    <div>
      <h2>Список нотаток</h2>

      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;