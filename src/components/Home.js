import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap';
import './Home.css';

export default function Home() {
    const { user, logOut } = useUserAuth();
    console.log(user);
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch(err){
            console.log(err.message);
        }
    }
  return (
      <div>
          
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CertiValid</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Register</a>
                          </li>
        </ul>
        <form class="d-flex">
            <button class="btn btn-outline-danger" onClick={handleLogOut}>Logout</button>
        </form>
    </div>
  </div>
</nav>








          <div className='welcomemsg'>Welcome { user && user.email.substring(0,user.email.indexOf("@"))}</div>
          <br />
          
          <br />
          
          
    </div>
  )
}

//<div><Button variant='primary' onClick={handleLogOut}>Log out</Button></div>
//{user && user.email}