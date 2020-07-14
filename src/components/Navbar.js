import { Link } from 'gatsby'
import React from "react"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Zeha Irawan</Link>
      <Link to="/archives">All Posts</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
