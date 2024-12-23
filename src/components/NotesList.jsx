import React from "react";
import NoteItem from "./ItemNote";

const NotesList = ({ notes, toggleArchive, deleteNote, emptyMessage }) => {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">{emptyMessage}</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
