import React from "react";
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
      <footer className="page-footer font-small pt-0">
        <div className="shadow bg-dark container-fluid text-md-left text-white py-3">
        <div className="row">
        <div className="col-md-4 mt-md-0 mt-3 text-white">
        
              <h5 className="h5 font-weight-bold text-warning">AllTrendingGraphics</h5>

            <p className="my-3 text-white " style={{ width: '400px', textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            interdum sem sed justo interdum, vitae dapibus odio sagittis. In vel
            tellus dapibus, posuere turpis nec, vulputate nibh. Pellentesque
            accumsan placerat faucibus. Quisque sit amet elit non tellus
            sollicitudin luctus.
            </p>
            
            <div display="flex" className="mt-4 mb-3">
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-facebook"></button>
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-twitter"></button>
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-google"></button>
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-github"></button>
            </div>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-3 text-warning">
                <h5 className="text-uppercase">Get Help</h5>
                <ul className="list-unstyled text-white">
                    <li><Link to="#" className="tex text-decoration-none text-light">Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 text-warning">
                <h5 className="text-uppercase">Products</h5>
                <ul className="list-unstyled text-white">
                    <li>Nike</li>
                    <li>New Balance</li>
                    <li>Adidas</li>
                </ul>
            </div>
        </div>
        </div>

        <div class="footer-copyright text-center  text-light py-3 style" >
    © 2022 Copyright:   
    <Link class="text-light" to="">  Shoewear.com</Link>
  </div>
      </footer>
        
    )
}

export default Footer


