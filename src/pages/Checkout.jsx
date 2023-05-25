import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const state = useSelector((state)=> state.handleCart)

    var total = 0;
    var diff = 0;
    const itemList = (product) => {
        total = total + product.price
        diff = product.qty * product.price
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{product.title}</h6>
                    <span className="text-muted">{product.qty} x ${product.price}</span>
                </div>
                <span className="text-dark fst-normal">${diff}</span>
            </li>
        )
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last"><br></br><br></br>
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="display-6">Order summary</span>
                            <span className="badge bg-dark rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group ">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>${total}
                            </li>
                        </ul>
                        <br></br>
                        <Link to='/success' className="btn btn-dark btn-lg w-100" type="submit">Checkout</Link><br></br>
                        <Link to='/products' className="btn btn-outline-dark btn-lg w-100" type="submit">Back to Shop</Link>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="display-5">Payment details</h4><br></br>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                            <div className="col-sm-6">
                                    <label for="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Cardo" />
                                    <div className="invalid-feedback">
                                        First name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Dalisay" />
                                    <div className="invalid-feedback">
                                        Last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="email" className="form-label">Email <span className="text-muted"></span></label>
                                    <input type="email" className="form-control" id="email" placeholder="Shoewear@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Brgy. Bulatok Pagadian City" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                            </div>
                            <br></br>

                           

                            <div className="row gy-3">

                                <div className="col-md-12">
                                    <label for="cc-number" className="form-label">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="xxxx xxxx xxxx xxxx" required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="xx/xx" required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="xxx" required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="xxxx" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;