import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



const SearchPage = (props) => {

    const [search, setSearch] = useState([])
    const [parentData, SetParentData] = useState([search])
    //API call #1 Searching for a video based on a query
    //https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key=AIzaSyAGD9V8FT2RGzoRY2gn1RDnEiiKR-izXj8 



    async function searchPage(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${props.search[0]}&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y&part=snippet`)
        setSearch(response.data.items)
        SetParentData(response.data.items)
        
    }
    
    

    useEffect(()=>{
        searchPage()
    }, [])

    console.log(search)
    console.log(parentData)
    
    return(
        <div>
            <div className="container">
            {search.map((element, index) => {
                return (
                        <div className="container" key={index}>
                            {element.snippet ? <Link to={`/play/${element.id.videoId}`}><img src={element.snippet.thumbnails.default.url} alt='Video Thumbnail'/></Link> : null}
                            
                        </div>
                )
            })}
            </div>
            
            
        </div>
    )
    
}
export default SearchPage;

