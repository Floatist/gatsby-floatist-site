import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getImage } from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from '../components/layout'
import { section, teamSection, teamHeader, teamItem, card, row, personName, role, container, paragraph, blueShape, beigeShape } from './about.module.css'

const AboutPage = ({ data }) => {

  console.log(data)

  const titleStyle = {
    fontSize: '60px',
    fontFamily: 'Larsseit',
    fontWeight: 600
  }

  return (
    <Layout pageTitle="About us">
      <Container fluid className={container}>
        <div className={blueShape}></div>
        <div className={beigeShape}></div>
        <Container fluid className={section}>
          <h1 style={titleStyle}>Make running a charter company simpler, more fun and more streamlined.</h1>
          <p className={paragraph}>Floatist is the productivity tool that brings all your information, people, and tools together to run your business. It improves your customers' experience, and makes your staff lives' easier from charter to charter. It is the tool that everyone in the yacht charter industry is waiting for.
          </p>
        </Container>
        <Container fluid className={teamSection}>
        
          <Row className={row}>
            <Col lg={12} className={teamHeader}>
              <h1>Our team</h1>
            </Col>
            {
              data.allMdx.nodes.map((node) => (
                <Col md={12} lg={6} className={teamItem}>

                  <Card className={card} key={node.id}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.profile_pic.childImageSharp)}
                      alt="Cindy"
                    />
                    <Card.Body>
                      <Card.Title><h3 className={personName}>
                        {node.frontmatter.name}
                      </h3></Card.Title>
                      <Card.Text>
                        <p className={role}><span style={{ color: "grey" }}>{node.frontmatter.country} | {node.frontmatter.role}</span></p>
                        <MDXRenderer>
                          {node.body}
                        </MDXRenderer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }

          </Row>
      </Container>
      </Container>

    </Layout>
  )
}

export const query = graphql`
query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/content/about/"}}
      sort: {fields: frontmatter___order}
    ) {
      nodes {
        frontmatter {
          name
          role
          country
          profile_pic {
            childImageSharp {
              gatsbyImageData(height: 400)
            }
          }
        }
        id
        body
      }
    }
  }
  
`

export default AboutPage

    // cindyPhoto: file(relativePath: {eq: "cindy-profile-cropped.jpg"}) {
    //   id
    //   childImageSharp {
    //     gatsbyImageData(height: 400)
    //   }
    // }
    // albertPhoto: file(relativePath: {eq: "albert.jpeg"}) {
    //   id
    //   childImageSharp {
    //     gatsbyImageData(height: 400)
    //   }
    // }