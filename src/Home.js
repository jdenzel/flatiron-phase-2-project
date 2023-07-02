import React, { useEffect } from "react";

function Home({ homes }) {

    return (
        <div>
            <h1>Home</h1>
            <p>Select a county</p>
            <button>Anne Arundel</button>
            <button>Baltimore</button>
            <button>Carroll</button>
            <button>Charles</button>
            <button>Frederick</button>
            <button>Harford</button>
            <button>Howard</button>
            <button>Montgomery</button>
            <button>Prince George's</button>
        </div>
    );
}

export default Home;