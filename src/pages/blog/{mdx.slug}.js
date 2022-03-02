import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { Container } from 'react-bootstrap'

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Container>
              <h1>{data.mdx.frontmatter.title}</h1>
              <p>{data.mdx.frontmatter.date}</p>
              <GatsbyImage
                image={image}
                alt="alternative"
              />
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
      date(formatString: "MMMMM D, YYYY")
      hero_image_alt
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`

export default BlogPost