import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState('')
    
    
 

    
    const searchHandler = (event) => {
        event.preventDefault()
        let searchValue = searchInput
        props.addNewSearchProperty(searchValue)
    }


    return (
        
        <form onSubmit={searchHandler} className='form-inline'>
                <div className='form-group mx-sm-3 mb-2'>
                    <label className="sr-only"><b>SEARCH</b></label>
                    <input placeholder='Enter your search here:' className="form-control" type='text' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                </div>
                <div>
                    <Link to ='/search/searchPage'> <button type='submit' className="btn btn-primary mb-2">Submit</button> </Link> 
                </div>
            </form>

    )


}
export default SearchBar;