import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav class="navbar">
          <a id="brand" href="#">Logo</a>
          <ul class="nav-list">
            <li class="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="create-post">Create</Link>
            </li>
            <li class="nav-item">
              <Link to="create-post">About Me</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar