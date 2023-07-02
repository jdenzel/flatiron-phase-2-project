import React, {useState} from "react";
import Card from "./Card";

function ListingsForm({ homes, onAddHome }) {

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
    <div className="form">
      <h1>ListingsForm</h1>
      <p>ListingsForm page body content</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="county" value={formData.county} placeholder="County" />
        <input type="text" onChange={handleChange} name="image" value={formData.image} placeholder="Image address" />
        <input type="text" onChange={handleChange} name="type" value={formData.type} placeholder="Type" />
        <input type="text" onChange={handleChange} name="beds" value={formData.beds} placeholder="Beds" />
        <input type="text" onChange={handleChange} name="bathrooms" value={formData.bathrooms} placeholder="Bathrooms" />
        <button type="submit">Add Home</button>
    </form>

    {/* <Card homes={homes} /> */}
    </div>

  );
}

export default ListingsForm;