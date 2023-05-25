import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    const userDetails = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    try{
      await axios.post('http://localhost:3000/api/users/register', userDetails)
      .then(function(response) {
          alert(response.data.message)
          console.log(response.data.success)
          if(response.data.success){     
          }
      })
      navigate('/')
  } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <i className="fa fa-user-plus me-1"> Signup</i>
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                Signup
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-3">
                <span className="fa fa-google me-2"></span> Sign up With Google
              </button>
              <button className="btn btn-primary w-100 mb-3">
                <span className="fa fa-facebook me-2"></span> Sign up With
                facebook
              </button>
              <form onSubmit={onSubmitRegister}>
                <div className="mb-2">
                  <label for="s" className="form-label">
                    First name
                  </label>
                  <input
                    type="firstname"
                    className="form-control"
                    id="s"
                    aria-describedby="frst"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                   required/>
                </div>
                <div className="mb-2">
                  <label for="sad" className="form-label">
                    Last name
                  </label>
                  <input
                    type="lastname"
                    className="form-control"
                    id="sad"
                    aria-describedby="last"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  required/>
                </div>
                <div className="mb-2">
                  <label htmlfor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  required/>
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlfor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
              <div className="link">
                <p>
                  Already Have an Account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
