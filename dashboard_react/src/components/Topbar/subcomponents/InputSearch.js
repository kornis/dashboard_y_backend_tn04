import React, { useState, useRef } from "react";
import LastMovieInDB from "../../ContentRowTop/subcomponents/LastMovieInDb";

function InputSearch(props) {
const inputRef = useRef();
//const [ movieTitle, setMovieTitle ] = useState("");

    // const handleSearch = (e) => {
    //     const title = e.target.value;
    //     setMovieTitle(title);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const movieTitle = inputRef.current.value;
        props.searchMovie(movieTitle);
    }

    return(
        <form className="form-inline" onSubmit={ handleSubmit }>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={inputRef} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default InputSearch;