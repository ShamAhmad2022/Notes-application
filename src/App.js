import React, { useState, useEffect } from 'react';
import NoteList from "./components/NoteList";
import { nanoid } from 'nanoid';
import SearchBar from './components/SearhBar';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoteDetails from './components/NoteDetails';
import EditNote from './components/EditNote';


function App() {

  const [notes, setNotes] = useState([]);
  const [searchcontent, setSearchcontent] = useState('');
  const [darkModeToggle, setDarkModeToggle] = useState(false); //boolean 
  const [flexToggle, setFlexToggle] = useState(false); //boolean
  

  useEffect(() => {
    const savesNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savesNotes) {
      setNotes(savesNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);


  const AddNewNote = (noteTitle, noteText) => {
    setNotes([{
      id: nanoid(),
      title: noteTitle,
      text: noteText,
      date: new Date().toLocaleDateString()
    }, ...notes]);
  }

  const deleteNote = (id) => {
    const newnotesafterdelete = notes.filter((note) => note.id !== id);
    setNotes(newnotesafterdelete);
  }


  const saveEditedNote = (NoteId, newTitle, newText) => {

  //  const newarray = notes.filter(note=>note.id !== NoteId);
  //  const ob1= {
  //   id: NoteId,
  //   title: newTitle,
  //   text: newText,
  //   date: new Date().toLocaleDateString()
  //  }

  //  newarray.push(ob1);

  //  console.log("newarray");
  //  console.log(newarray);

  //  setNotes(newarray);

    let newestarray = notes.map(function(note){
      if(note.id !== NoteId){
        return note;
      }
      else{
        return {
          id: NoteId,
          title: newTitle,
          text: newText,
          date: new Date().toLocaleDateString()
        };
      }
    })
    
    setNotes(newestarray);
    //or set the value of the local storage :  localStorage.setItem

    newestarray= newestarray.splice(0, 0, newestarray.splice(newestarray.findIndex(object => object.id === NoteId), 1)[0]);
    
    
    // setNotes(newestarray);

  // const newarray = notes.map(note => ((note.id !== NoteId) ? note : {
  //   id: NoteId,
  //   title: newTitle,
  //   text: newText,
  //   date: new Date().toLocaleDateString()
  // })
  // );

  // setNotes(newarray);


  }
  

  return (

    <BrowserRouter>
      <div className={`${darkModeToggle && 'dark-mode'}`}> 

        <div className="container">
          <Header setDarkModeTogglefunction={setDarkModeToggle} setFlexToggle={setFlexToggle} flexToggle={flexToggle}/>
          <SearchBar setSearchcontentFunction={setSearchcontent} />
          <Routes>
           
            <Route exact path='/' element={<NoteList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchcontent) || note.title.toLocaleLowerCase().includes(searchcontent))} AddNewNoteFun={AddNewNote} deleteNotefun={deleteNote} flexToggle={flexToggle}
            />} />
            <Route exact path='/viewnote/:noteId' element={<NoteDetails notes={notes} />} />
            <Route exact path='/editnote/:noteId' element={<EditNote notes={notes} saveEditedNote={saveEditedNote} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;