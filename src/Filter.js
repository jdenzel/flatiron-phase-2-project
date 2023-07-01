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
            <label>
                County:
                <select value={county} onChange={(e) => setCounty(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Anne Arundel">Anne Arundel</option>
                    <option value="Baltimore">Baltimore</option>
                    <option value="Carroll">Carroll</option>
                    <option value="Frederick">Frederick</option>
                    <option value="Harford">Harford</option>
                    <option value="Howard">Howard</option>
                    <option value="Montgomery">Montgomery</option>
                    <option value="Prince George's">Prince George's</option>
                </select>
            </label>
            <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Apartment">Condo</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                </select>
            </label>
            <label>
                Beds:
                <select value={beds} onChange={(e) => setBeds(e.target.value)}/>
            </label>
            <label>
                Bathrooms:
                <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}/>
            </label>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
}

export default Filter;