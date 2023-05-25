import React, {useState} from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onHandleLogin = async () => {
    try {
      const userCredentials = {
        email: email,
        password: password
      }
      await axios.post("http://localhost:3000/api/users/login", userCredentials, {responseType: "json"})
      .then(function(response) {
        alert(response.data.message)
        console.log(response.data.success)
        if(response.data.success){
          navigate("/")
        }
      })
      
    }catch(err){ 
      console.log(err)
    }
  }
    return (
        <>
<button type="button" className="btn btn-outline-warning ms-2" data-bs-toggle="modal" data-bs-target="#loginModal">
<i className="fa fa-sign-in me-1"> Login</i>
</button>

<div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title text-warning" id="loginModalLabel">Login</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="kayden07@gmail.com" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder="password" id="exampleInputPassword1" value={password} onChange = {(e) => setPassword(e.target.value)} required/>
  </div>
  <button type="submit" className="btn btn-primary w-100 mb-3" onClick={onHandleLogin}>Login</button>
</form>
<button className="btn btn-primary w-100 mb-3 bg-danger"> 
        <span className="fa fa-google me-2 "></span> Sign in With Google</button>
        <button className="btn btn-primary w-100 mb-3"> 
        <span className="fa fa-facebook me-2"></span> Sign in With facebook</button>
      </div>
      <div class="modal-footer">
        <p>Already have an account?</p><Signup />
      </div>
    </div>
  </div>
</div>
        </>
)
    }



export default Login;