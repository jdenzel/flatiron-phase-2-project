import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

function Listings({ homes }) {

    const [filteredHomes, setFilteredHomes] = useState(homes);

    function handleFilterChange(filteredHomes) {
        setFilteredHomes(filteredHomes);
    }

    // function handleSearchChange(event)  {
    //     setSearch(event.target.value);
    //   }
    
    //   function handleItemFormSubmit(newItem)  {
    //     setItemState([...itemState, newItem])
    //   }
    
    return (
        <div>
            <Filter homes={homes} onFilterChange={handleFilterChange} />
            <Card homes={homes} />
        </div>

    );
}

export default Listings;