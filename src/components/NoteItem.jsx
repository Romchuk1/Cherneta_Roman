function NoteItem({ note, deleteNote }) {
  return (
    <div>
      <h3>{note.title}</h3>

      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>
        Видалити
      </button>

      <hr />
    </div>
  );
}

export default NoteItem;