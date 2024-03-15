import React from "react";
import Video from "../images/back.mp4"
import "../App.css"


const IntroVideo = () => {
    return(
        <video  loading="lazy" className="IntroVideo" autoPlay muted loop preload="none">
            <source src={Video}  type="video/mp4"/>
        </video>
    )
}
export default IntroVideo;