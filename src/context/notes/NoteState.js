import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props)=>{
 const notesInitial = [
    {
      "_id": "640d82ea64351b61e2c5069e",
      "user": "63fc03a26caaf8351950bc60",
      "title": "our notes are added updated2",
      "description": "yes you are right our notes are added and2",
      "tag": "test",
      "date": "2023-03-12T07:44:42.067Z",
      "__v": 0
    },
    {
      "_id": "640d832a64351b61e2c506a2",
      "user": "63fc03a26caaf8351950bc60",
      "title": "One more test",
      "description": "yes we done it.",
      "tag": "tag",
      "date": "2023-03-12T07:45:46.802Z",
      "__v": 0
    },
    {
      "_id": "640d97c364351b61e2c506a4",
      "user": "63fc03a26caaf8351950bc60",
      "title": "our notes are added",
      "description": "yes you are right our notes are added and we are back on track",
      "tag": "tag",
      "date": "2023-03-12T09:13:39.966Z",
      "__v": 0
    },
    {
      "_id": "640f4cae51d0fb9fb140eb96",
      "user": "63fc03a26caaf8351950bc60",
      "title": "I am the best",
      "description": "yes you are right becouse you worked hard for ir.",
      "tag": "tag",
      "date": "2023-03-13T16:17:50.203Z",
      "__v": 0
    },
    {
      "_id": "640f4cc251d0fb9fb140eb9d",
      "user": "63fc03a26caaf8351950bc60",
      "title": "Updated the note",
      "description": "yes you are right using put req",
      "tag": "youtube",
      "date": "2023-03-13T16:18:10.823Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;