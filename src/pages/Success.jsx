import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className='home'>
        <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/pay.jfif" className="payment" alt='...' width={500} ></img>
                    </div>
                    <div className="col-md-4">
                        <br></br><br></br>
                        <p>Your Payment Is Successfull</p>
                        <p className='lead'>Thank you for your payment. An automated payment receipt will be sent to your email.</p>
                         <Link to='/' className="btn btn-dark btn-lg w-100" type="submit">Back to Home</Link>
                    </div>
                </div>
    </div>
  )
}
