import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { useUserAuth } from '../context/UserAuthContext';
import { Alert } from 'react-bootstrap'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    }
    catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    }
    catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <div className="loginform">
      <div className="card container">
      <h1>Register</h1>
      {error && <Alert variant="danger">{ error}</Alert>}
      <form>
            <div class="form-group">
              
    <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
          <div className='submitbutton'><button type="submit" class="btn btn-primary" onClick={handleSubmit}>Register</button></div>
          <div>Already a User? <Link to="/">Log in</Link></div>
  
      </form>
      
      <div className='gbtn'>
        <GoogleButton type="dark" onClick={handleGoogleSignIn}/>
      </div>
      </div>
      </div>
    </div>
  )
}
