import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <h1>Get in touch</h1>
     <ul>
       <li>Email:<a href="mailto:hello@zehairawan.com">hello@zehairawan.com</a></li>
       <li>Twitter:<a href="https://twitter.com/ZehaIrawan">@zehairawan</a></li>
       <li>Github:<a href="https://github.com/JangkarBumi">@JangkarBumi</a></li>
     </ul>
    </Layout>
  )
}

export default Contact
