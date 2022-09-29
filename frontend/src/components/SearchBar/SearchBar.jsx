import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState([])
    
    const navigate = useNavigate()
 

    
    const searchHandler = (event) => {
        event.preventDefault()
        let newSearch = searchInput
        props.addNewSearchProperty(newSearch)
        navigate('/search/searchPage')

        
    }
    


    return (
        
        <form onSubmit={searchHandler} className='form-inline'>
                <div className='form-group mx-sm-3 mb-2'>
                    <label className="sr-only"><b>SEARCH</b></label>
                    <input placeholder='Enter your search here:' className="form-control" type='text' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                </div>
                <div>
                    <button type='submit' className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>

    )


}
export default SearchBar;