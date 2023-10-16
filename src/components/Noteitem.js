import React from "react";

function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-danger btn-sm">
              <i className="fa-solid fa-trash"></i>
            </button>
            <button className="btn btn-primary btn-sm">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
