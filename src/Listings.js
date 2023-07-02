import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

function Listings({ homes }) {

    const [filteredHomes, setFilteredHomes] = useState(homes);

    function handleFilterChange(filteredHomes) {
        setFilteredHomes(filteredHomes);
    }
    
    return (
        <div>
            <Filter homes={homes} onFilterChange={handleFilterChange} />
            <Card homes={filteredHomes} />
        </div>

    );
}

export default Listings;