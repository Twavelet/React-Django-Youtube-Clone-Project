import { useParams } from "react-router-dom";


const VideoPage = (props) => {

    const { videoId } = useParams()


    return(
        <div>
            <h1>Testing to see if the routing works {videoId} </h1>
            {/* <iframe 
            src="" 
            title=""
            >

            </iframe> */}
        </div>
    )
}

export default VideoPage;