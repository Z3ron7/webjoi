import React from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Login from "./buttons/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Product from "./pages/Product";
import Navbar from "./component/Navbar";
import Products from "./pages/Products";
import PhotoEditing from "./pages/PhotoEditing";
import FlashDeals from "./discount/FlashDeals";
import Carousel from "./pages/carousel";
import Footer from "./component/footer";
import Admin from "./component/Admin";
import PhotoList from "./component/PhotoList"
import PhotoUpdate from "./component/PhotoUpdate"
import ProdList from "./component/ProdList";
import ProdUpdate from "./component/ProdUpdate";
import LoginAdmin from "./component/AdminLogin"


function App () {
  return (
     
  <div>
    <Navbar />


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="photoediting" element={<PhotoEditing />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/flashdeals" element={<FlashDeals />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/PhotoList" element={<PhotoList />} />
        <Route path="/PhotoUpdate" element={<PhotoUpdate />} />
        <Route path='/PhotoUpdate/:id' element={<PhotoUpdate/>}/>
        <Route path="/productList" element={<ProdList />} />
        <Route path="/ProdUpdate" element={<ProdUpdate />} />
        <Route path='/prodUpdate/:id' element={<ProdUpdate/>}/>
      </Routes>

      <Footer />
      
    
    
  </div>
  );
}

export default App;
