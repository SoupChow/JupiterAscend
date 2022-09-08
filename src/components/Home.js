import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap';

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
          <div>Welcome to the Moon!</div>
          <br />
          { user && user.email}
          <div><Button variant='primary' onClick={handleLogOut}>Log out</Button></div>
    </div>
  )
}
