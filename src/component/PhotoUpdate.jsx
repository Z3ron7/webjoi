import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css'

function ProdUpdate() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate()

    let {id} = useParams()
    console.log(id)

    const handleData = async function() {
        const {data} = await axios.get(`http://localhost:3000/api/books/${id}`)
        console.log(data[0])
        setTitle(data[0].title)
        setPrice(data[0].price)
        setDescription(data[0].description)
        setCategory(data[0].category)

    }

    useEffect(() => {
      handleData();
  }, [])


  const handleSubmit = async function (e) {
    e.preventDefault()



    const updateDetais = {
        title: title,
        price: price,
        description: description,
        category: category
    }

    try {
        await axios.put(
            `http://localhost:3000/api/books/update/${id}`, updateDetais
          );
        navigate('/admin')
    
    }catch(err) {
        console.log(err)
    }


    
    
    // setData(data);
  };


  return (
    <div className="bg-dark">
    <div  className='product-display'>
      <form className="container mx-auto row g-4 mt-5 text-light" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label text-light">Product Name</label>
          <input type="text" className="form-control2" id="inputEmail4" value={title}
              onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input type="number" className="form-control2" id="inputEmail4" value={price}
              onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="input-group-sm">
          <span className="input-group-text form-control3">Description</span>
          <textarea value={description}
              onChange={(e) => setDescription(e.target.value)}
            className="form-control3"
            aria-label="With textarea"
          ></textarea>
        </div>
        <select className="form-select  form-control3" aria-label="Default select example" style={{width:513}} value={category}
              onChange={(e) => setCategory(e.target.value)}>
            <option value="PREMADE"></option>
            <option value="PREMADE">PREMADE</option>
            <option value="SOLD COVERS">SOLD COVERS</option>
        </select>
        <button type="submit" style={{ width: '8rem', height: '3rem', marginLeft: 500,marginBottom:20}}>Update</button>
      </form>
    </div>
    </div>
  );
}

export default ProdUpdate;