import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Skeleton = ({ height, width }) => {
  const skeletonStyle = {
    height,
    width,
    backgroundColor: 'lightgray',
    borderRadius: '4px',
    margin: '1rem 0',
  };

  return <div style={skeletonStyle}></div>;
};

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    let isMounted = true;

    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/books/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching product data');
        }
        const data = await response.json();
        if (isMounted) {
          setProduct(data[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className='col-md-6'>
          <Skeleton height={400} />
        </div>
        <div className='col-md-6' style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    console.log(product.image);
    return (
      <>
        <div className='col-md-6' key={product.id}>
          <br />
          <img src={product.image} alt={product.title} height='400px' width='400px' />
        </div>
        <div className='col-md-6'>
          <p className='lead text-black-50'>{product.category}</p>
          <p className='lead my-1'>
            {product.rating} <i className='fa fa-star'></i>
          </p>
          <h1 className='display-5'>{product.title}</h1>
          <h3 className='display-4 my-4'>₱ {product.price}</h3>
          <br />
          <h5>PRODUCT DESCRIPTION</h5>
          <p className='lead'>{product.description}</p>
          <br />
          <div className='d-grid gap-2'>
            <button className='btn btn-dark' onClick={() => addProduct(product)}>
              ADD TO CART
            </button>
            <Link to='/cart' className='btn btn-dark fw-bold'>
              View Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-4'>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
