import React from 'react'
import Layout from '../components/layout'
import Bio from '../components/bio'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const __html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} description={data.markdownRemark.excerpt} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <Bio />
    </Layout>
  )
}

// le slug on le passe en variable => on lui indique le type et ensuite on l'utilise pour dire qu'elle page on souhaite charger
export const query = graphql`
  query($slug: String!){
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
