import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

//Route 2
function Listings({ homes }) {

    const [filteredHomes, setFilteredHomes] = useState(homes);

    function handleFilterChange(filteredHomes) {
        setFilteredHomes(filteredHomes);
    }

    return (
        <div className="listings">
            <Filter homes={homes} onFilterChange={handleFilterChange} />
            <Card homes={filteredHomes} />
        </div>

    );
}

export default Listings;