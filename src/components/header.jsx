import react, { useState } from "react";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';



function Header(props){

    const [searchText, setSearchText] = useState("");

    function handleChange(event){
        const value = event.target.value
        props.searchNotesList(value);
        setSearchText(value);

    }

    
    
    return (
        <div className="heading">
            <h1><OnlinePredictionIcon />
            Keeper</h1>
            <input className="search" onChange={handleChange} value={searchText} type="text"  name="searchItem" 
            placeholder="search an item..." size="40"/>
            <button onClick={()=> {props.handleMode()}} 
            className="btn btn-warning">toogle-mode</button>
            
        </div>
    );
}


export default Header;
