import { ApiCall } from "../../ApiCall/ApiCall";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {

  const {showAlert} = props
 
  // const port=process.env.PORT||5000
 // const host="https://sticky-notes-backend.vercel.app"

    const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await ApiCall.GetNotes()
    const json = await response.json() 
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    let obj={
      title:title,
      description:description,
      tag:tag
    }
    const response =await ApiCall.AddNote(obj)
    const note = await response.json();
    setNotes(notes.concat(note))
    showAlert("Note added successfully","success")
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await ApiCall.DeleteNote(id)
    //const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  showAlert("Note deleted successfully","success")
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    let obj={
      id:id,
      title:title,
      description:description,
      tag:tag
    }
    const response = await ApiCall.EditNote(obj)
    //const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
    showAlert("Note edited successfully","success")
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;