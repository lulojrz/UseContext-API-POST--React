import { createContext } from "react";
import { useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    try {
      const response = await fetch(
        "https://ca79e855da59ea14b53e.free.beeceptor.com/api/notes/"
      );
      const data = await response.json();
      setNotes(data);
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };
  const addNote = async (newNote) => {
    try {
      await fetch(
        "https://ca79e855da59ea14b53e.free.beeceptor.com/api/notes/",
        { method: "POST", body: JSON.stringify(newNote) }
      );
      setNotes([...notes, newNote]);
    } catch (e) {
      console.log(e);
    }
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id !== updatedNote.id) return note;
      else return updatedNote;
    });
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, updateNote, addNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
export { NoteContext, NoteProviderWrapper };
