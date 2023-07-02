import React, {useState} from "react";

function Filter({ homes, onFilterChange }) {

    const [county, setCounty] = useState('All');
    const [type, setType] = useState('All');
    const [beds, setBeds] = useState('All');
    const [bathrooms, setBathrooms] = useState('All');

    const handleFilter = () => {



        const filteredHomes = homes.filter((home) => {
            return (
                (county === "All" || home.county === county) &&
                (type === "All" || home.type === type) &&
                (beds === "All" || home.beds == beds) &&
                (bathrooms === "All" || home.bathrooms == bathrooms)
            );
        });
        onFilterChange(filteredHomes);
        console.log(homes)
        console.log(filteredHomes)
        console.log(county)
        console.log(type)
        console.log(beds)
        console.log(bathrooms)
    };
    return (
        <div>
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
                    {/* <option>Number of Beds</option> */}
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
                    {/* <option>Number of Baths</option> */}
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4">4 Baths</option>
                </select>
            </label>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
}

export default Filter;