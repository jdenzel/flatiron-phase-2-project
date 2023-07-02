import React from "react";
import Drone from "./DroneShot.mp4"

const Video = () => {
    return (
        <div className="drone-video">
                <video src={Drone} type="video/mp4" autoPlay loop muted />
                <div className="overlay">
                <div className="drone-content">
                <h1>Drone Shot</h1>
                <button>Get Started</button>
                </div>
            </div>
        </div>
    );
    }

export default Video;