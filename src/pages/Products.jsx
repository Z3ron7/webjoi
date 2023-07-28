import React, { useState, useEffect, useRef } from 'react';
import './product.css';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('/api/books');
      if (componentMounted.current) {
        const data = await response.json();
        setProducts(data);
        setFilter(data);
        setLoading(false);
      }

      return () => {
        componentMounted.current = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const filterProduct = (cat) => {
    const updateList = products.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2 fw-bold" onClick={() => setFilter(products)}>
            All books
          </button>
          <button className="btn btn-outline-dark me-2 fw-bold" onClick={() => filterProduct('PREMADE')}>
            Premade
          </button>
          <button className="btn btn-outline-dark me-2 fw-bold" onClick={() => filterProduct('SOLD COVERS')}>
            Sold Covers
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4 py-2 " id={product.id} style={{ width: '17rem' }} key={product.id}>
              <div className="text-black bg-secondary card h-100 text-center p-2 cardp">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} className="card-img-top" alt={product.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title mb-3">{product.title.substring(0, 20)}...</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-warning fw-bold">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="bg-dark py-1">
      <div className="container bg-light py-3">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-5 fw-bolder text-center text-black">BOOKS COVER</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
