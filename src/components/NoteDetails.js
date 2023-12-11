import React from 'react';
import { useParams, Link } from 'react-router-dom';

function NoteDetails({ notes }) {

  const { noteId } = useParams();

  const notesselectedarray = notes.filter((note) => note.id === noteId); //return a subset of array
  const notesselected = notesselectedarray[0]; //we only toke the object

  return (
    <div className='note-details'>
      <div className='note-details-flex'>
        <div className='note-details-title-and-date'>
          <h1 className='note-details-title'>{notesselected.title}</h1>
          <p className='note-details-date'>{notesselected.date}</p>
        </div>
        <Link to={`/editnote/${notesselected.id}`} class="btn btn-light note-details-button btn-lg">Edit</Link>
      </div>

      <p className='note-details-text'>{notesselected.text}</p>
      <Link to="/" class="btn btn-light note-details-button">back</Link>
    </div>
  )
}

export default NoteDetails