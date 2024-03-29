import React, {useContext} from "react";
import contextValue from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(contextValue);
    const {notes, setNotes} = context;
  return (
    <div className="row my-3">
      <h2>Your Note</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note}/>
      })}
    </div>
  );
};

export default Notes;
