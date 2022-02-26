import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { Container } from 'react-bootstrap'

const BlogPost = ({ data }) => {
    
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Container>
              <h1>{data.mdx.frontmatter.title}</h1>
              <p>{data.mdx.frontmatter.date}</p>
              <MDXRenderer>
                  {data.mdx.body}
              </MDXRenderer>
            </Container>
            
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default BlogPost