import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainDoc from "./MainDoc";
import uuid from "react-uuid";
import "./note.css";
export default function App() {
  const [notes, setNotes] = useState(()=>{

    const savedNotes = localStorage.getItem("notes")
    return savedNotes ? JSON.parse(savedNotes) : []
  }
   
  );
  const [selectedNote, setSelectedNote] = useState(false);

  useEffect(()=>{
   localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "title",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote.id);
  };

  const onDeleteNote = (noteid) => {
    const deleteNote = notes.filter((note) => note.id !== noteid);
    setNotes(deleteNote);
  };
  const upDatedNote = (updateNote) => {
    const updatedArray = notes.map((note) => {
      if (note.id === updateNote.id) {
        return updateNote;
      }
      return note;
    });
    setNotes(updatedArray);
  };
  const getActiveNote = () => {
    return notes.find(({ id }) => id === selectedNote);
  };

  return (
    <div className="note-body">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
      <MainDoc selectedNote={getActiveNote()} upDatedNote={upDatedNote} />
    </div>
  );
}
