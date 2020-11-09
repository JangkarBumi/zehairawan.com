import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = () => {
  return (
    <Layout>
      <SEO title="My Projects" />
      <h2> Here are some of my projects:</h2>
      <ol>
        <li>MerlinDoc</li>
        <li>Uila!</li>
      </ol>
    </Layout>
  )
}

export default projects
