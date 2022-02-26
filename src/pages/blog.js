import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container } from 'react-bootstrap'

const BlogPage = ({ data }) => {

    console.log(data.allMdx.nodes)

    return (
        <Layout pageTitle="Blog">
            <Container>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </article>

                    ))
                }
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMM DD, Y")
          title
        }
        id
        body
      }
    }
  }
  
`

export default BlogPage