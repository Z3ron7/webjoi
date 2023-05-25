import React, { useState, useEffect } from "react";
import ProdList from "./ProdList";
import "./style.css";
import NavAdmin from "./NavAdmin";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState([]);
  const [category, setCategory] = useState("");
 
  // const [path, setPath] = useState("");

  const sendImage = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("avatar", image);
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
    
    <div className="fluid bg-secondary">
      <NavAdmin />
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div
            className="bg-dark text-white my-2 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "600px" }}
          >
            <div className="p-1 d-flex flex-column align-items-center mx-auto">
              <h5 className="fw-bold mb-4 text-uppercase">Add New Books</h5>
              <form
                onSubmit={sendImage}
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <div className="mb-3 input-group-sm w-100">
                  <input
                    className="lg form-control"
                    label="prod"
                    id="formControlLg"
                    placeholder="Enter Product Name"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4 input-group-sm w-100">
                  <input
                    className="lg form-control"
                    label="price"
                    id="formControlLg"
                    placeholder="Enter Product Price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-4 input-group-sm w-100">
                  <input
                    className="lg form-control"
                    label="des"
                    id="formControlLg"
                    placeholder="Enter Product Description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
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
                  <option value="PREMADE"></option>
                  <option value="PREMADE">PREMADE</option>
                  <option value="SOLD COVERS">SOLD COVERS</option>
                </select>
              </label>
              <button outline className="btna lg mx-2 px-2 text-light" type="submit">
                Add Books
              </button>
              </form>
              
             
            </div>
          </div>
        </div>
      </div>
     <ProdList />
      
    </div>
  );
}
 

export default Admin;
