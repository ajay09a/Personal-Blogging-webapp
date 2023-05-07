import React from 'react'
import {Link} from 'react-router-dom'
import emoji from '../assets/emoji.jpg'

const Navbar = ({user}) => {
  return (
    <>
        <nav className="navbar">
          <a id="brand" href="/">
            <img src={emoji}/>
          </a>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            
            {user?<><li className="nav-item">
              <Link to="create-post">Create</Link>
            </li>
            <li className="nav-item">
              <Link to="logout">Log-out</Link>
            </li>
            </>:<><li className="nav-item">
              <Link to="admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to="aboutme">About Me</Link>
            </li></>}
          </ul>
        </nav>
    </>
  )
}

export default Navbar