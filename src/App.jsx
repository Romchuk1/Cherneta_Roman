import { useState } from 'react';

import NoteContext from './context/NoteContext';

import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteSearch from './components/NoteSearch';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState('');

  function addNote(title, text) {
    const newNote = {
      id: Date.now(),
      title: title,
      text: text
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((note) => note.id !== id)
    );
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        search,
        setSearch
      }}
    >
      <div>
        <Header />

        <NoteForm />

        <NoteSearch />

        <NoteList />

        <Footer />
      </div>
    </NoteContext.Provider>
  );
}

export default App;