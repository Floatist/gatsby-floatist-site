import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {

    console.log(data.allFile.edges)

    return (
        <Layout pageTitle="Blog">
            <p>Blog</p>
            <p>This will be our blog</p>
            <ul className="list-unstyled">

            {
                    data.allFile.edges.map(({ node })  => (
                        <li key={node.name}>{node.name}</li>

                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default BlogPage