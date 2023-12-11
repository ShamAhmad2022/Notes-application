import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

function AddNote({ AddNewNoteFun }) {

    const [newTitle, setNewTitle] = useState("");
    const characterLimitForNoteTitle = 30;

    const [newNote, setNewNote] = useState("");
    const characterLimitForNoteText = 200;

    const onChangeinput = (event) => {
        if (characterLimitForNoteTitle - event.target.value.length >= 0) {
            setNewTitle(event.target.value);
        }
    }

    const onChangetextbox = (event) => {
        if (characterLimitForNoteText - event.target.value.length >= 0) {
            setNewNote(event.target.value);
        }
    }

    const saveNote = () => {
        if (newNote.trim().length > 0 && newTitle.trim().length > 0) {
            AddNewNoteFun(newTitle, newNote);
        }
        setNewNote('');
        setNewTitle('');
    }

    const remainingCharactersForNoteText = characterLimitForNoteText - newNote.length;

    const remainingCharactersForNotetitle = characterLimitForNoteTitle - newTitle.length;

    return (
        <div className='note addNote'>
            <div className='note-header'>
                <input type='text' placeholder='Type your title here...' onChange={onChangeinput} value={newTitle} />
                <small>{remainingCharactersForNotetitle}/30</small>
            </div>
            <textarea row='8' cols='10' placeholder='Type your text here...' onChange={onChangetextbox} value={newNote}></textarea>
            <div className='note-footer'>
                {/* // <small>{characterlimit - newNote.length} Remaining</small>***\\ */}
                <small>{remainingCharactersForNoteText}/200</small>
                <Button variant="light" className='save btn-sm' onClick={saveNote}>Save</Button>
            </div>
        </div>
    )
}

export default AddNote