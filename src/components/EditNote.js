import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function EditNote({ notes, saveEditedNote }) {

    const { noteId } = useParams();

    const notesselectedarray = notes.filter((note) => note.id === noteId);
    const notesselected = notesselectedarray[0];

    const [newTitle, setNewTitle] = useState(notesselected.title);
    const characterLimitForNoteTitle = 30;

    const [newText, setNewText] = useState(notesselected.text);
    const characterLimitForNoteText = 200;


    const onchangeTitle = (event) => {
        if (characterLimitForNoteTitle - event.target.value.length >= 0) {
            setNewTitle(event.target.value);
        }
    }


    const onchangeText = (event) => {
        if (characterLimitForNoteText - event.target.value.length >= 0) {
            setNewText(event.target.value);
        }
    }

    const remainingCharactersForNotetitle = characterLimitForNoteTitle - newTitle.length;

    const remainingCharactersForNoteText = characterLimitForNoteText - newText.length;


    const saveNote = () => {
        if (newTitle.trim().length > 0 && newText.trim().length > 0) {
            saveEditedNote(noteId, newTitle, newText);
        }
    }

    return (
        <div>
            <div className='note-details note-edit-inputs'>
                <div className='note-details-flex'>
                    <div className='note-details-title-and-date'>
                        <input type='text' value={newTitle} onChange={onchangeTitle} />
                        <small>{remainingCharactersForNotetitle}/30</small>
                    </div>

                </div>

                <textarea cols='156' value={newText} onChange={onchangeText}></textarea>
                <small>{remainingCharactersForNoteText}/200</small>
                <div className='note-details-flex-buttons'>
                    <Link to={`/viewnote/${noteId}`} class="btn btn-light note-details-button">back</Link>
                    <Link to={`/viewnote/${noteId}`} class="btn btn-light note-details-button" onClick={saveNote}>Save</Link>
                </div>
            </div>
        </div>
    )
}

export default EditNote