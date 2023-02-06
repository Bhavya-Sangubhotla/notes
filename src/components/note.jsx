import react from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){

    

    const date = new Date().toLocaleDateString();

    return (
       // <textarea rows="auto" cols={30} placeholder="This is a note content"></textarea>
       <div className="Note new">
        <p>{props.title}</p>
        <p>{props.content}</p>
        <div className="note-footer">
        <small>{date}</small>
        <button onClick={() => {props.onDeleted(props.id)}} className="btn btn-warning"><DeleteIcon /></button>
        </div>
       </div>
    );
}

export default Note;