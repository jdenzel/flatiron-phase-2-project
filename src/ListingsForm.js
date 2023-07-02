import React, {useState} from "react";

function ListingsForm({ onAddHome }) {

    const [formData, setFormData] = useState({
        county: "",
        image: "",
        type: "",
        beds: "",
        bathrooms: "",
    });

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event){
        event.preventDefault()
    

        fetch("http://localhost:3333/homes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newHome) => {onAddHome(newHome);
            console.log(newHome);
        });
    }

  return (
    <div className="form" id="addHome">
      <h1>List a home!</h1>
      <p>ListingsForm page body content</p>
      <form onSubmit={handleSubmit}>
      <label>
            County:
            <select value={formData.county} onChange={handleChange} name="county">
                <option defaultValue="Anne Arundel">Anne Arundel</option>
                <option value="Baltimore">Baltimore</option>
                <option value="Carroll">Carroll</option>
                <option value="Frederick">Frederick</option>
                <option value="Harford">Harford</option>
                <option value="Howard">Howard</option>
                <option value="Montgomery">Montgomery</option>
                <option value="Prince George's">Prince George's</option>
            </select>
        </label>
        <input type="text" onChange={handleChange} name="image" value={formData.image} placeholder="Image address" />
        <label>
                Type:
                <select value={formData.type} onChange={handleChange} name="type">
                    <option defaultValue="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                </select>
            </label>

        <label>
                Beds:
                <select value={formData.beds} onChange={handleChange} name="beds">
                    <option defaultValue="All"> All </option>
                    <option value="1">1 Bed</option>
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4 Beds</option>
                </select>
            </label>
            <label>
                Bathrooms:
                <select value={formData.bathrooms} onChange={handleChange} name="bathrooms">
                    <option defaultValue="All"> All </option>
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4">4 Baths</option>
                </select>
            </label>
        <button type="submit">Add Home</button>
    </form>
    </div>

  );
}

export default ListingsForm;