import React, { useEffect } from "react";
import { useState } from "react";


const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState('')
    
    
    // function handleSubmit(event){
    //     event.preventDefault();
    //     let newEntry = {
    //         weight: weight,
    //         date: date
    //     }
    //     console.log(newEntry)
    //     props.addNewEntryProperty(newEntry)
    // }
    

    const searchHandler = (event) => {
        event.preventDefault()
        let searchValue = searchInput
        console.log(searchValue)
        props.addNewSearchProperty(searchValue)

    }
    console.log(searchInput)
    return (
        
        <form onSubmit={searchHandler} className='form-inline'>
                <div classname='form-group mx-sm-3 mb-2'>
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