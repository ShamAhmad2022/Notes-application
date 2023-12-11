import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

function NoteList({ notes, AddNewNoteFun, deleteNotefun}) {
    
  return (
    <div className='note-list-flex'>

      <AddNote AddNewNoteFun={AddNewNoteFun}/>

      {notes.sort((a, b) => b.date - a.date).map((note) =>
        <Note id={note.id} title={note.title} text={note.text} date={note.date} deleteNotefun={deleteNotefun}/>)}
    </div>
  )
}

export default NoteList;