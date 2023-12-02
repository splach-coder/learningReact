import React from "react";
import trash from "../svg/trash-svgrepo-com.svg";

export default function Sidebar(props) {
  let notes = [...props.notes].reverse();

  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => {
          return (
            props.setCurrentNoteId(note.id), props.setCurrentNoteIndex(index)
          );
        }}>
        <h4 className="text-snippet">{note.name || "note " + (index + 1)}</h4>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3 className="">Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
        <button
          className="  cursor-pointer border-none rounded-[3px] h-[30px] w-[30px]  text-white bg-red-500 important"
          onClick={props.deleteNote}>
          <img className="text-white w-5 m-auto" src={trash} />
        </button>
      </div>
      {noteElements}
    </section>
  );
}
