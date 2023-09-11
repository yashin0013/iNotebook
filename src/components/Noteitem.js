import React from "react";

function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
          {note.description}
          </p>
          <a href="#" className="btn btn-primary">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
