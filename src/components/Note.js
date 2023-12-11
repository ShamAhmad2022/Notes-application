import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';



function Note ( {id, title, text, date, deleteNotefun} ) {

    // const onDeleteIconClick = ({id}) => {
    //     deleteNotefun(id);
    // }


    return (
        <div className='note'>
            <div className='note-header note-footer-dark'>
            <h5 className='note-title'>{title}</h5>
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=> deleteNotefun(id)}/>
            </div>
            <span className='note-text'>{text}</span>
            <div className='note-footer note-footer-dark'>
                <small>{date}</small>
                <Link to={`/viewnote/${id}`} class="btn btn-light btn-sm">View</Link>
            </div>
        </div>
    )
}

export default Note