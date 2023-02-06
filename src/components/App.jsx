import react, { useState, useEffect } from "react";
import Header from "./header";
import CreateNote from "./createnote";
import Footer from "./footer";

import NoteContent from "./notecontent";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prev => {
            return [...prev, note];
        })
    }

    function handleDelete(id, event) {
        setNotes(prev => {
            return prev.filter((index, item) => {

                return item !== id;
            })
        });
    }

    const [search, setSearch] = useState([]);

    function handleSearch(searchValue) {

        if (searchValue === "") {
            setSearch([])
        }
        else {
            const newlist = notes.filter(eachNote => {
                return eachNote.title.includes(searchValue);
            })
            setSearch(newlist);

        }


    }


    const [colorBool, setColorBool] = useState(false);
    
    
    function handleToggle(){
        console.log("called");
        setColorBool(prev => {
            return !prev;
        })
        
        
    }

    
    
    
    


    return (
        <div>
        <Header searchNotesList={handleSearch} handleMode={handleToggle}/>
        <div className={colorBool ? "dark-mode": null}>
                <CreateNote onAdd={addNote} />
                <NoteContent notes={search.length != 0 ? search : notes}

                    onDeleted={handleDelete} />

                <Footer />
            </div>
        </div>
    );
}

export default App;