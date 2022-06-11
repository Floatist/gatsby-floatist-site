import * as React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import { section, title, image, abstract, category } from './index.module.css'
import './index.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {

  return (
    <Layout pageTitle="Blog">
      <Container fluid className={section}>
        <Row>
          {
            data.allMdx.nodes.map((node) => (
              <Col sm={6} md={3}>

                <article key={node.id}>
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.hero_image.childImageSharp)}
                      className={image}
                    />
                    <p className={category}>{node.frontmatter.category}</p>
                    <h5 className={title}>
                      {node.frontmatter.title}
                    </h5>
                  </Link>
                  <p className={abstract}>{node.frontmatter.abstract}</p>
                </article>

              </Col>
            ))
          }
        </Row>
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
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          category
          slug
        }
        id
      }
    }
  }
  
`

export default BlogPage