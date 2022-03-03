import * as React from 'react'
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Layout from '../components/layout'
import { section, paragraph, blueShape, beigeShape } from './about.module.css'

const AboutPage = ({ data }) => {

    console.log(data)

    const titleStyle = {
        fontSize: '60px',
        fontFamily: 'Helvetica Neue',
        fontWeight: 600
    }

    return (
        <Layout pageTitle="About us">
            <div className={blueShape}></div>
            <div className={beigeShape}></div>
            <Container fluid className={section}>
                <h1 style={titleStyle}>{data.mdx.frontmatter.title}</h1>
                <p className={paragraph}>{data.mdx.frontmatter.subtitle}</p>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
    mdx(frontmatter: {name: {eq: "about"}}) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`

export default AboutPage