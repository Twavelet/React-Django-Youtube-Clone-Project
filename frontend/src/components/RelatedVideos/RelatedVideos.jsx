import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RelatedVideo = (props) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
      getRelatedVideos();
      
    },
    [props.videoId]);

    const getRelatedVideos = async () => {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.videoId}&type=video&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y`
        //   `https://developers.google.com/youtube/v3/?part=snippet&relatedToVideoId=${props.videoId}&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y`
        );
        setRelatedVideos(response.data.items);
        console.log(response.data.items)
      }

  return (
    <div className="container">
      {relatedVideos.map((element, index) => {
        return (
          <div className="container" key={index}>
            {element.snippet ? (
              <Link to={`/play/${element.id.videoId}`}>
                <img
                  src={element.snippet.thumbnails.default.url}
                  alt="Video Thumbnail"
                />
              </Link>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default RelatedVideo;
