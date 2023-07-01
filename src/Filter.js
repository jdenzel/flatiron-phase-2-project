import React, {useState} from "react";

function Filter({ homes, setFilteredHomes }) {

    const [county, setCounty] = useState([]);
    const [type, setType] = useState([]);
    const [beds, setBeds] = useState([]);
    const [bathrooms, setBathrooms] = useState([]);

    const handleFilter = () => {
        const filteredHomes = homes.filter((home) => {
            return (
                (county === "All" || home.county === county) &&
                (type === "All" || home.type === type) &&
                (beds === "All" || home.beds === beds) &&
                (bathrooms === "All" || home.bathrooms === bathrooms)
            );
        });
        setFilteredHomes(filteredHomes);
    };




    return (

        <div>
            
        </div>
    );
}

export default Filter;