import { Link } from "gatsby"
import React from "react"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-links">
        <Link className="logo" to="/">
          Zeha Irawan
        </Link>
        <Link to="/me">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  )
}

export default Nav
