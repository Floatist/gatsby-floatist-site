import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { header, title, row, col, abstract, author, date, body } from './slug.module.css'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  // const backgroundColor = data.mdx.frontmatter.color

  const hrStyle = {
    color: '#000000',
    backgroundColor: '#000000',
    height: 2,
    borderColor: '#000000'
  }

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      {/* HEADER */}
      <Container fluid className={header} style={{ backgroundColor: data.mdx.frontmatter.color }}>
        <Row className={row}>
          <Col md={6}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
          </Col>
          <Col md={6} className={col}>
            <h1 className={title}>{data.mdx.frontmatter.title}</h1>
            <p className={abstract}>{data.mdx.frontmatter.abstract}</p>
            <p className={author}>By {data.mdx.frontmatter.author}</p>
            <p className={date}>{data.mdx.frontmatter.date}</p>
          </Col>
        </Row>
      </Container>

      {/* BODY */}
      <Container fluid className={body}>
        <p><i className="fa-regular fa-clock"></i> {data.mdx.timeToRead} min read</p>
        <hr style={hrStyle} />
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
    frontmatter {
      title
      author
      abstract
      date(formatString: "MMMM D, YYYY")
      color
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      category
    }
    body
    timeToRead
  }
}
`

export default BlogPost