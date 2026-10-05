import React from "react";
import './Video.css'
import Playvideo from "../../component/Playvideo/Playvideo";
import Recommended from "../../component/Recommended/Recommended";

const Video = ()=>{

    return(
        <>
        <div className="play-container">
            <Playvideo/>
            <Recommended/>
        </div>
        </>
    )
}
export default Video;