import react, { useState } from "react";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { style } from "@mui/system";

function CreateNote(props) {

    const characterCount = 200;

    const [FocusBool, setFocusBool] = useState(false);

    function handleFocus() {
        setFocusBool(true);
    }



    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        const name = event.target.name;
        var value = event.target.value;

        if (name === "title") {
            setNewNote(prev => {
                return {
                    ...prev,
                    [name]: value
                };
            })
        }
        else if (name === "content") {
            if (value.length > 200) {
                value = value.substring(0, 200);
            }
            setNewNote(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            })

        }


    }


    function handleClick(event) {
        if (newNote.content.trim().length != 0) {
            props.onAdd(newNote);
        }
        setNewNote({
            title: "",
            content: ""
        })

        event.preventDefault();
    }


    return (

        <div className="Note create">
            {FocusBool ?
                <input type="text" name="title" placeholder="title" onChange={handleChange} value={newNote.title} />
                : null}
            <textarea rows={FocusBool ? "5" : "1"} cols="20" name="content" placeholder="Enter your content..." onFocus={handleFocus} onChange={handleChange} value={newNote.content} ></textarea>
            {FocusBool ?
                <div className="note-footer">
                    <small>{characterCount - newNote.content.length} remaining</small>

                    <Zoom in={FocusBool} className="add">
                        <Fab onClick={handleClick} className="mx-auto"><PlusOneIcon /></Fab>
                    </Zoom>
                </div>
                : null}

        </div>

    );

}
export default CreateNote;