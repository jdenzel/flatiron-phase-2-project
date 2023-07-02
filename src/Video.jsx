import React from "react";
import Drone from "./DroneShot.mp4"

const Video = () => {
    return (
        <div className="video">
        <video src={Drone} type="video/mp4" autoPlay loop muted />
        </div>
    );
    }

export default Video;