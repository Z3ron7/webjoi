import React, { Component } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Book from '../pages/images/book.jpeg'
import Website from '../pages/images/website.jpg'
import Photo from '../pages/images/photo.jpg'
import './style1.css'
import { Link } from "react-router-dom";
export default class SimpleSlider extends Component {
  render() {
    
    return (
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <Link to="/products"><img src={Book} class="card-img-top1" alt="..."/></Link>
      <div class="card-body">
      <Link to="/products" class="card-title">BOOK COVER</Link>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <Link><img src={Website} class="card-img-top1" alt="..."/></Link>
      <div class="card-body">
      <Link to="/products" class="card-title">WEBSITE TEMPLATE DESIGN</Link>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <Link to="photoediting"><img src={Photo} class="card-img-top1" alt="..."/></Link>
      <div class="card-body">
      <Link to="/photoediting" class="card-title">PHOTO EDITING</Link>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
    );
  }
}