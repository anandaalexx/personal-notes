import React, { useState } from "react";

const FormInputNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length <= charLimit) {
      addNote({
        id: Date.now(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="note-input">
      <h2>Make a Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={charLimit}
            className="note-input__title"
          />
          <p className="note-input__title__char-limit">
            {charLimit - title.length} characters remaining
          </p>
        </div>
        <textarea
          placeholder="Write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="note-input__body"
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default FormInputNote;
