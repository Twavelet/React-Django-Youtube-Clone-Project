import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const { videoId } = useParams();

  //   title={element.snippet.title}
  //   description={element.snippet.description}

  return (
    <div>
      <h1>Testing to see if the routing works {videoId} </h1>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoPage;
