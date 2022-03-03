import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import { section } from './index.module.css'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle="Blog">
                <Container fluid className={section}>

                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`} style={{ color: 'blue'}}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.frontmatter.abstract}</p>
                        </article>

                    ))
                }
                </Container>
                
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {type: {eq: "blog"}}}) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMM DD, Y")
          title
          abstract
        }
        id
        slug
      }
    }
  }
  
`

export default BlogPage