import React from "react";
import "./sidebar.css";
export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  selectedNote,
  setSelectedNote,
}) {
  return (
    <div className="note-sidebar-body">
      <div className="sidebar-main-function">
        <h1>TITLE</h1>
        <button onClick={() => onAddNote(notes)}>ADD</button>
      </div>
      <div className="sidebar-notes">
        {notes?.map((note) => (
          <div
            key={note.id}
            className={`sidebar-added-note ${
              note.id === selectedNote && "active"
            }`}
            onClick={() => setSelectedNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note?.title}</strong>
              <button
                className="note-delete"
                onClick={() => onDeleteNote(note.id)}
              >
                X
              </button>
            </div>
            <p className="sidebar-content">{note?.body.substr(0,30) + "...."}</p>
            <p className="sidebar-note-date">
              lastModified{" "}
              {new Date(note?.lastModified).toLocaleDateString("en-GB", {
                hours: "2-digit",
                minutes: "2-digit",
              })}
            </p>
            <hr className="note-index-line"></hr>
          </div>
        ))}
      </div>
    </div>
  );
}
