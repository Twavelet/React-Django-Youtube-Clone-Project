import React, { useEffect, useState } from 'react';
import axios from 'axios'

const SearchPage = (props) => {

    const [search, setSearch] = useState([])
    //API call #1 Searching for a video based on a query
    //https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key=AIzaSyAGD9V8FT2RGzoRY2gn1RDnEiiKR-izXj8 
    async function searchPage(){
        const response = await axios.get(`//https://www.googleapis.com/youtube/v3/search?q=${props.searchInput}&key=AIzaSyAGD9V8FT2RGzoRY2gn1RDnEiiKR-izXj8&part=snippet `)
        console.log(response.item)
        setSearch(response.data.items.snippet.thumbnails.urls)
    }

    useEffect(()=>{
        searchPage()
    }, [])


    
    return(
        <div>
            {search.map((element) => {
                return (
                    <img src={element.default} alt='Video Thumbnail'/>
                )
            })}
            
        </div>
    )
    // return (
        
    //     <div onClick={click}>
    //         const FilterButton = (props) => {

// return (
//     <div className="p-2 ">
//         <button className="btn btn-secondary" onClick={props.fetchInvoices}>Filter</button>
//     </div>
//  );
// };
//           {/* want to get the trhumbnail and display all the thumbnail results and then have an onClick event to take us to the video */}
       
//     )
// }
}
export default SearchPage;

