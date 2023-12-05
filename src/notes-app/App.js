import { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
import "./styles/style.css";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function App() {
  const [notes, setNotes] = useState(getNotes() || []);

  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes.length > 0 && notes[0].id) || ""
  );

  function createNewNote() {
    const name = prompt("Enter note name please");
    const newNote = {
      id: nanoid(),
      name: name.length > 0 ? name : `note ${notes.length + 1}`,
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
    setCurrentNoteIndex(0);
  }

  useEffect(
    function () {
      saveNotes();
    },
    [notes]
  );

  function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function getNotes() {
    return JSON.parse(localStorage.getItem("notes"));
  }

  function moveTofirst() {
    setNotes((prevNotes) => {
      const index = prevNotes.findIndex((obj) => obj.id === currentNoteId);

      if (index !== -1) {
        let note = prevNotes.splice(index, 1)[0];
        prevNotes.push(note);
      }

      return [...prevNotes]; // Ensure to return a new array
    });
  }

  function deleteNote() {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== currentNoteId);
    });

    setCurrentNoteIndex((prevIndex) =>
      prevIndex !== 0 ? prevIndex - 1 : prevIndex
    );

    setCurrentNoteId(notes[currentNoteIndex].id);
  }

  function updateNote(text) {
    moveTofirst();
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[currentNoteIndex]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            setCurrentNoteIndex={setCurrentNoteIndex}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
