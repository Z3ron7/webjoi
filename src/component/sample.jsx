import React, { useState, useEffect } from "react";
import axios from "axios";
import NavAdmin from "./NavAdmin";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stocks, setStocks] = useState("");
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [imagePath, setImagePath] = useState([]);
  const [path, setPath] = useState("");

  const sendImage = async (event) => {

    event.preventDefault();
    let formData = new FormData();
    formData.append("avatar", image);
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stocks", stocks)
    formData.append("featured", featured ? 1 : 0);
    formData.append("category", category);

    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setImagePath(data.data);
      });
  };


  return (
    <div>
      <NavAdmin />
      <h1 className="mx-auto">Add Product</h1>
      <form onSubmit={sendImage}>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <label>
            Name:
            <input
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Brand:
            <input
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Stocks:
            <input
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              type="number"
              value={stocks}
              onChange={(e) => setStocks(e.target.value)}
            />
          </label>
          <label>
            Featured:
            <input
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "25px",
                marginLeft: "15px",
                alignSelf: "flex-end",
              }}
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
          </label>
          <label>
            Image:
            <input
              style={{
                border: "none",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <label>
            Category:
            <select
              style={{
                border: "solid",
                borderRadius: "25px",
                boxShadow: "none",
                height: "40px",
                marginLeft: "15px",
                padding: 5,
              }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="clothing">Paint</option>
              <option value="electronics">Wheels</option>
              <option value="home">Spray</option>
            </select>
          </label>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;