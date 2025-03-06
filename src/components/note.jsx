import { useContext } from "react";
import { NoteContext } from "../context/notecontext";

const Note = ({ note }) => {
  const { updateNote } = useContext(NoteContext);

  const handleCkeck = () => {
    const updatedNote = { ...note, marked: !note.marked };
    console.log(updatedNote);
    updateNote(updatedNote);
  };
  return (
    <div className="note">
      <h2>{note.title}</h2>
      {note.marked ? (
        <p style={{ color: "green" }}>Hecho ✅</p>
      ) : (
        <input
          type="checkbox"
          checked={note.marked}
          onChange={handleCkeck}
          value={note.marked}
        />
      )}
    </div>
  );
};

export default Note;
