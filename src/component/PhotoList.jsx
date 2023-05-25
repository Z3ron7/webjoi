import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

const ProdList = () => {
  const [data, setData] = useState([]);
  
      const handleData = async function () {
 
          const {data} = await axios.get("http://localhost:3000/api/photoediting");
          console.log(data);
          setData(data);
      } 
          const handleDelete = async function (id) {
            const {data} = await axios.delete (
              `http://localhost:3001/api/photoediting/delete/${id}`
            );
            console.log(data);
            handleData()
            };
            useEffect(() => {
              handleData()
            }, [])
          
  return (
    <section className='content-main'>
    <div className='product-display'>
      <table className='table table-dark table-striped'> 
      <thead >
    <tr >
      <th scope="row">Book_Id</th>
      <td >Title</td>
      <td>Price</td>
      <td>Description</td>
      <td >Image</td>
      <td className='text-wrap w-25' >Category</td>
      <td> Update/Delete</td>
      
    </tr>
    </thead>
    <tbody>
      
    {data.map((item) => (
      <tr key={item.id}>
        <th scope='row'>{item.id}</th>
      
      <td className='text-wrap w-25' >{item.title}</td>
      <td>{item.price}</td>
      <td className='text-wrap w-25' >{item.description}</td>
      <td>{item.image}</td>
      <td >{item.category}</td>

      <td>
        <button type="button" className="btn btn-primary m-2" style={{ width: '5rem', height: '2rem'}}><Link to={`/prodUpdate/${item.id}`} className='text-decoration-none text-white'>Update</Link></button>
        <button type="button" onClick={() => handleDelete(item.id)} className="btn btn-danger m-2" style={{ width: '5rem', height: '2rem'}} >Delete</button>
      </td>
      </tr>
    ))}
      </tbody>
    </table>
    </div>
    </section>
  )
}

export default ProdList