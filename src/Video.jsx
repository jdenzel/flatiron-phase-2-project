import React from "react";
import Drone from "./DroneShot.mp4"
import { NavLink } from "react-router-dom";

const Video = () => {
    return (
        <div className="drone-video">
            <video src={Drone} type="video/mp4" autoPlay loop muted />
            <div className="overlay">
                <div className="drone-content">
                    <h1>Find Your Home in Maryland</h1>
                    <NavLink to="/listings">
                        <button className="video-btn">
                            Get Started
                        </button >
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Video;