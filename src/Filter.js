import React, { useState } from "react";
function Filter({ homes, onFilterChange }) {

    const [county, setCounty] = useState('All');
    const [type, setType] = useState('All');
    const [beds, setBeds] = useState('All');
    const [bathrooms, setBathrooms] = useState('All');

    //function to filter all the cards depending on the filter options
    const handleFilter = () => {
        const filteredHomes = homes.filter((home) => {
            return (
                (county === "All" || home.county === county) &&
                (type === "All" || home.type === type) &&
                // eslint-disable-next-line
                (beds === "All" || home.beds == beds) &&
                // eslint-disable-next-line
                (bathrooms === "All" || home.bathrooms == bathrooms)
            );
        });
        onFilterChange(filteredHomes);

    };
    return (
        <div className="filter-box">
            <label>
                County:
                <select value={county} onChange={(e) => setCounty(e.target.value)}>
                    <option defaultValue="All">All</option>
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
                    <option defaultValue="All">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                </select>
            </label>
            <label>
                Beds:
                <select value={beds} onChange={(e) => setBeds(e.target.value)}>
                    <option defaultValue="All"> All </option> 
                    <option value="1">1 Bed</option>
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4 Beds</option>
                </select>
            </label>
            <label>
                Bathrooms:
                <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
                    <option defaultValue="All"> All </option>
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4">4 Baths</option>
                </select>
            </label>
            <div>
                <button class="filter-btn" onClick={handleFilter}>Filter</button>
            </div>
        </div>
        // maximum beds and bathrooms is 4
    );
}

export default Filter;