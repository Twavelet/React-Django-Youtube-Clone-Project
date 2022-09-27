import React, { useEffect, useState } from 'react';
import axios from 'axios'

const SearchPage = (props) => {

    const [search, setSearch] = useState([])
    //API call #1 Searching for a video based on a query
    //https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key=AIzaSyAGD9V8FT2RGzoRY2gn1RDnEiiKR-izXj8 
    async function searchPage(){
        const response = await axios.get(`//https://www.googleapis.com/youtube/v3/search?q=${props.searchInput}&key=AIzaSyAGD9V8FT2RGzoRY2gn1RDnEiiKR-izXj8&part=snippet `)
        console.log(response.data)
        setSearch(response.data.items)
    }

    useEffect(()=>{
        searchPage()
    }, [])


    
    return(
        <div>
            {search.map((element) => {
                return (
                    <div>
                    {element.snippet ? <img src={element.snippet.thumbnails.default.urls} alt='Video Thumbnail'/> : null}
                    </div>
                )
            })}
            
        </div>
    )
    
}
export default SearchPage;

