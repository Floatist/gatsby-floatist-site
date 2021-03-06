import * as React from "react"
import Container from 'react-bootstrap/Container'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import FeatureRightSection from "../components/featureRightSection"
import FeatureLeftSection from "../components/featureLeftSection"
import HomeHero from "../components/homeHero"
import Activation from "../components/activation"
import FeaturesRow from "../components/featuresRow"
import { container } from './index.module.css'

const IndexPage = ({ data }) => {

  return (
    // Container needed outside to cute off al the css shapes used that fall outside page      
    <Container fluid className={container}>
      <Layout pageTitle="The only tool you need">
        <HomeHero
          title={data.mdx.frontmatter.heroTitle}
          subtitle={data.mdx.frontmatter.heroSubtitle}
          image={getImage(data.hero)}
        />

        <FeatureRightSection
          title={data.mdx.frontmatter.firstFeatureTitle}
          subtitle={data.mdx.frontmatter.firstFeaturePar}
          link="/product#mobile"
          image={getImage(data.mobileCheckin)}
        />

        <FeatureLeftSection
          title={data.mdx.frontmatter.secondFeatureTitle}
          subtitle={data.mdx.frontmatter.secondFeaturePar}
          link="/product#maintenance"
          image={getImage(data.maintenance)}
        />

        {/* TRIPLE FEATURE SECTION ROW */}
        <FeaturesRow 
          leftTitle={data.mdx.frontmatter.leftTitle}
          leftPar={data.mdx.frontmatter.leftPar}
          middleTitle={data.mdx.frontmatter.middleTitle}
          middlePar={data.mdx.frontmatter.middlePar}
          rightTitle={data.mdx.frontmatter.rightTitle}
          rightPar={data.mdx.frontmatter.rightPar}
          leftImage={getImage(data.leftImage)}
          middleImage={getImage(data.middleImage)}
          rightImage={getImage(data.rightImage)}
        />

        {/* TESTIMONIALS */}

        {/* ACTIVATION */}
        <Activation
          title={data.mdx.frontmatter.activationTitle}
          buttonText="Request a demo"
        />

        {/* NEWSLETTER */}

      </Layout>
    </Container>
  )
}

export const imageData = graphql`
  fragment imageData on File {
    id
    childImageSharp {
      gatsbyImageData(height: 250)
    }
  }
`

export const query = graphql`
query {
  hero: file(relativePath: {eq: "app-two-screens.png"}) {
    id
    childImageSharp {
      gatsbyImageData
    }
  }
  mobileCheckin: file(relativePath: {eq: "mobile-checkin.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 350)
    }
  }
  maintenance: file(relativePath: {eq: "maintenance.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 300)
    }
  }
  leftImage: file(relativePath: {eq: "black-reporting.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 200)
    }
  }
  middleImage: file(relativePath: {eq: "black-paperwork.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 200)
    }
  }
  rightImage: file(relativePath: {eq: "black-booking.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 200)
    }
  }
  mdx(frontmatter: {name: {eq: "home"}}) {
    frontmatter {
      heroTitle
      heroSubtitle
      firstFeatureTitle
      firstFeaturePar
      secondFeatureTitle
      secondFeaturePar
      leftTitle
      leftPar
      middleTitle
      middlePar
      rightTitle
      rightPar
      activationTitle
    }
  }
}
`

export default IndexPage
