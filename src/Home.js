import React, { useEffect } from "react";
import Video from './Video';


function Home({ homes }) {

    return (
        <div>
            <h1>Home</h1>
            <h3>Find Your Home in Maryland</h3>
            <Video />
            
        </div>
    );
}

export default Home;