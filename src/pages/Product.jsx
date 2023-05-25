import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Product() {
    let {id} = useParams();
    const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
    }

        const getProduct = async function() {
            // setLoading(true);
            const { data } = await axios.get(`http://localhost:3000/api/books/${id}`)
             console.log(data[0])
            setProduct(data[0]);
            // setLoading(false);
        }
        useEffect(() => {
          
        getProduct();
    }, []);

  // const Loading = () => {
  //   return(
  //     <>
  //       <div className='col-md-6'>
  //          <Skeleton height={400}/>
  //       </div>
  //       <div className='col-md-6' style={{lineHeight:2}}>
  //          <Skeleton height={50} width={300}/>
  //          <Skeleton height={75}/>
  //          <Skeleton height={25} width={150}/>
  //          <Skeleton height={50}/>
  //          <Skeleton height={150}/>
  //          <Skeleton height={50} width={100}/>
  //          <Skeleton height={50} width={100} style={{marginLeft:6}}/>
  //       </div>
  //     </>
  //   )
  // }

  const ShowProduct = () => {
    return(
      <>
        <div className='col-md-6'>
          <br></br>  
            <img src={product.image} alt={product.title} height="400px" width="400px"/>
        </div>
        <div className='col-md-6'>
            <p className='lead text-black-50'>
              {product.category}
            </p>
            {/* <p className='lead my-1'>
              {product.rating} <i className='fa fa-star'></i>
            </p> */} v
            <h1 className='display-5'>{product.title}</h1>
            <h3 className='display-4 my-4'>
              ₱ {product.price}
            </h3>
            <br></br>
            <h5>PRODUCT DESCRIPTION</h5>
            <p className='lead'>{product.description}</p><br></br>
            <div class="d-grid gap-2">
            <button class="btn btn-dark" onClick={()=>addProduct(product)}>ADD TO CART</button>
            <Link to="/cart" class="btn btn-dark fw-bold">View Cart</Link>
          </div>
          
          
        </div>
      </>
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-4'>
          {/* {loading ? <Loading /> :*/ <ShowProduct/>} 
        </div>
      </div>

    </div>
  )
}
