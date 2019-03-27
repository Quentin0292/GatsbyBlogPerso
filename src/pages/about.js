import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const About = () => (
  <Layout page='4'>
    <SEO title="About" />
    <h1>About</h1>
    <Bio />
  </Layout>
)

export default About
