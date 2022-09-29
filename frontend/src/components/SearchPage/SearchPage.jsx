import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const SearchPage = (props) => {

    const [search, setSearch] = useState([])
    //API call #1 Searching for a video based on a query
    //https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key=AIzaSyAGD9V8FT2RGzoRY2gn1RDnEiiKR-izXj8 

//     function addNewEntry(terms){
    
//     let tempTerms= [terms, ...search]

//     setSearch(tempTerms);
//   }

    async function searchPage(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${props.search}&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y&part=snippet`)
        setSearch(response.data.items)
        console.log(search)
    }

    useEffect(()=>{
        searchPage()
    }, [])


    
    return(
        <div>
            
            <div className="container">
            {search.map((element) => {
                return (
                        <div className="container">
                            {element.snippet ? <Link to={`/play/${element.id.videoId}`}><img src={element.snippet.thumbnails.default.urls} alt='Video Thumbnail'/></Link> : null}
                            {/* in the useParams need to get the correct . notation path for the video ID */}
                        </div>
                )
            })}
            </div>
            
            
        </div>
    )
    
}
export default SearchPage;

