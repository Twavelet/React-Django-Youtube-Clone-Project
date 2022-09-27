import React from "react";
import { useState } from "react";
import SearchPage from '../SearchPage/SearchPage'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')
    

    const searchHandler = (event, searchValue) => {
        event.preventDefault()
        setSearchInput(searchValue)

    }
    return (
        <><form onSubmit={searchHandler} className='form-inline'>
            <div classname='form-group mx-sm-3 mb-2'>
                <label className="sr-only"><b>SEARCH</b></label>
                <input placeholder='Enter your search here:' className="form-control" type='text' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
            </div>
            <div>
                <button type='submit' className="btn btn-primary mb-2">Submit</button>
            </div>
        </form>
        <div>
            <SearchPage searchInput={searchInput} />
        </div></>

    )


}
export default SearchBar;