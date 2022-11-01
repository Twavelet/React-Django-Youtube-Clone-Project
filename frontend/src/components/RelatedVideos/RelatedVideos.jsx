import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RelatedVideo = (props) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect =
    (() => {
      const getRelatedVideos = async () => {
        let response = await axios.get(
          `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&type=video&relatedToVideoId=${props.videoId}`
        );
        setRelatedVideos(response.data.items);
      };
      getRelatedVideos();
      debugger;
    },
    [props.videoId]);

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
