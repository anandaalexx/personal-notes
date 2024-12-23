import React, { useState } from "react";
import { getInitialData } from "./utils";
import Header from "./components/Header";
import NoteInputForm from "./components/FormInputNote";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";
import Notification from "./components/Notifications";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
    setNotification({
      message: "Note successfully added!",
      type: "success",
    });
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const updatedNote = { ...note, archived: !note.archived };
          setNotification({
            message: updatedNote.archived
              ? "Note archived successfully!"
              : "Note unarchived successfully!",
            type: updatedNote.archived ? "info" : "success",
          });
          return updatedNote;
        }
        return note;
      })
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setNotification({
      message: "Note successfully deleted!",
      type: "error",
    });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="note-app__body">
        <NoteInputForm addNote={addNote} />
        <h2>Active Notes</h2>
        <NotesList
          notes={activeNotes}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
          emptyMessage="No active notes found."
        />
        <h2>Archived Notes</h2>
        <NotesList
          notes={archivedNotes}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
          emptyMessage="No archived notes found."
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
