import React from "react"
import Footer from "./Footer"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
