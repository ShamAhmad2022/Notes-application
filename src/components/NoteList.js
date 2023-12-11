import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

function NoteList({ notes, AddNewNoteFun, deleteNotefun, flexToggle}) {
  return (
    <div className={`${flexToggle && 'note-list-flex' && 'note-list'}`}>

      <AddNote AddNewNoteFun={AddNewNoteFun}/>

      {notes.sort((a, b) => b.date - a.date).map((note) =>
        <Note id={note.id} title={note.title} text={note.text} date={note.date} deleteNotefun={deleteNotefun}/>)}
    </div>

  )
}

export default NoteList;