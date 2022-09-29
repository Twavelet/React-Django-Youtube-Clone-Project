import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  // function addNewEntry(video){
    
  //   let tempVideos= [video, ...videos]

  //   setVideos(tempVideos);
  // }



  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=bobross&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y&part=snippet"
        //   // headers: {
          //   Authorization: "Bearer " + token,
          // },
        );
        setVideos(response.data.items);
        
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {videos &&
        videos.map((video) => (
          <div key={video.id}>
          {video.snippet ? <img src={video.snippet.thumbnails.default.url} alt='Video Thumbnails'/> : null}
          </div>
        ))}
        <div>
          
        </div>
    </div>
  );
};

export default HomePage;
