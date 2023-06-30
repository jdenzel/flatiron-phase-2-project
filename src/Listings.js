import React from "react";

function Listings({ homes }) {

    

    return (
        <div>
            {homes.map(home => (
         <p key={home.id}> {home.county} </p>
         ))
            }

            <h1>Listings</h1>

            <p>Listings page body content</p>
        </div>
    );
}

export default Listings;