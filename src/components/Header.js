import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header( {setDarkModeTogglefunction, setFlexToggle, flexToggle} ) {
  return (
    <div className='header'>
        <h1>NotesApp</h1>
        <Button variant="secondary" onClick={()=> setDarkModeTogglefunction((previousValue)=> !previousValue)}>Dark mode</Button>
        <Link to='/' class="btn btn-dark" onClick={()=> setFlexToggle((previousValue)=> !previousValue)}>Toggle Layout</Link>
        {/* <button class="btn btn-dark" onClick={()=> setFlexToggle((previousValue)=> !previousValue)}>Toggle Layout</button> */}
        {console.log("hehe: ")}
        {console.log(flexToggle)}
    </div>
  )
}

export default Header;