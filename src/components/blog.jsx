import { useContext, useEffect } from "react";
import { NoteContext } from "../context/notecontext";
import Note from "./note";
import CreateNote from "./createNote";

const Blog = () => {
  const { notes , getNotes} = useContext(NoteContext);

  useEffect(()=>{
    getNotes()
  },[])
  const noteCards = notes.map((note) => (
    <li key={note.id}>
      <Note note={note} />
    </li>
  ));

  return (
  
    <div className="notes-container">
      <h2>Lista de Tareas</h2>
      <ul className="list-tasks">  <CreateNote></CreateNote>{noteCards}</ul> 
     
    </div>
  );
};

export default Blog;
