import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedVideo from "../RelatedVideos/RelatedVideos";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState({});

  //   title={element.snippet.title}
  //   description={element.snippet.description}

  useEffect(() => {
    const getVideoInfo = async () => {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y`
      );
      debugger;

      // let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}%2C+snippet&id=mT0RNrTDHkI&key=AIzaSyA1F3oz5SnZzgw2X_FpbVyVEv9l1Rlex7Y`)
      setTitle(response.data.items[0].snippet.title);
      setDescription(response.data.items[0].snippet.description);
    };

    getVideoInfo();
  }, [videoId]);

  return (
    <>
      <div>
        <h1>Testing to see if the routing works {videoId} </h1>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
          frameBorder="0"
        ></iframe>
        <h3>Title: {title}</h3>
        <p>Description: {description}</p>
      </div>
      <RelatedVideo videoId={videoId} />
      {/* <CommentForm videoId={videoId} />
      <CommentList videoId={videoId} /> */}
    </>
  );
};

export default VideoPage;
