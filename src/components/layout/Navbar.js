import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/">Marko App</a>
    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About Me</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/music">Music</Link>
        </li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar