import React from 'react'
import Layout from '../components/layout'
import Bio from '../components/bio'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

import { Button, Icon, Divider } from "antd"

const ButtonGroup = Button.Group

export default ({ data, pageContext }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const __html = data.markdownRemark.html
  const { prev, next } = pageContext
  return (
    <Layout>
      <SEO title={title} description={data.markdownRemark.excerpt} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <Bio />
      <Divider />
      <ButtonGroup>
        {next && (
          <Button type="primary" size="large">
            <Link to={next.frontmatter.slug}>
              <Icon type="left" />
              {next.frontmatter.title}
            </Link>
          </Button>
        )}
        {prev && (
          <Button type="primary" size="large">
            <Link to={prev.frontmatter.slug}>
              {prev.frontmatter.title}
              <Icon type="right" />
            </Link>
          </Button>
        )}
      </ButtonGroup>
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
