import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/notecontext'

const CreateNote = () => {
    const {addNote} = useContext(NoteContext)
    const[noteTitle,SetnoteTitle] = useState("")
    const handleInput  = (e)=>{
        SetnoteTitle(e.target.value)
    }
    const handlesubmit = (e) =>{
       e.preventDefault();
       if(!noteTitle) return 
       const newNote = {
         id: Math.random() * 10,
         title: noteTitle,
         marked:false
       }
       addNote(newNote)
       SetnoteTitle("")
    }

  return (
    <form onSubmit={handlesubmit}>
        <label>Enter Note:</label>
        <input type="text" name="note" onChange={handleInput}/>
        <button type="submit">Create Note</button>
      
    </form>
  )
}

export default CreateNote
