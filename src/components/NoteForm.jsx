import { useState, useContext, useRef } from 'react';
import NoteContext from '../context/NoteContext';

function NoteForm() {
  const { addNote } = useContext(NoteContext);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const inputRef = useRef();

  function handleAdd() {
    if (title === '' || text === '') {
      return;
    }

    addNote(title, text);

    setTitle('');
    setText('');

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Додати нотатку</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAdd}>
        Додати
      </button>
    </div>
  );
}

export default NoteForm;