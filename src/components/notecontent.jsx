import react from "react";
import Note from "./note";

function NoteContent(props) {

   
   
    return (
        <div className="notes-Align">
            {props.notes.map((eachNote, index) => {

                return <Note title={eachNote.title} content={eachNote.content} id={index} key={index} onDeleted={props.onDeleted} />
            })}
        </div>
    );
}
export default NoteContent;