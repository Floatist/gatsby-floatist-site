import * as React from "react"
import Container from 'react-bootstrap/Container'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import FeatureRightSection from "../components/featureRightSection"
import FeatureLeftSection from "../components/featureLeftSection"
import HeroSection from "../components/heroSection"
import Activation from "../components/activation"
import FeaturesRow from "../components/featuresRow"
import { container, beigeShape, sandShape, rockShape } from './index.module.css'

const IndexPage = ({ data }) => {

  return (
    // Container needed outside to cute off al the css shapes used that fall outside page      
    <Container fluid className={container}>

      <div className={beigeShape}></div>
      <div className={rockShape}></div>
      {/* Decoration right */}

      <Layout pageTitle="The only tool you need">
        <HeroSection
          title="The only tool you need to manage your fleet"
          subtitle="Optimize your business processes and improve your customer's experience"
          image={getImage(data.hero)}
          backgroundUrl="/images/ropes.jpg"
        />

        <FeatureRightSection
          title="Mobile check-in / out"
          subtitle="Let your customers familiarize themselves with the boat even before arrival, and allow them to check-in guided by our app. Say goodbye to the Saturday peaks."
          link="/product"
          image={getImage(data.mobileCheckin)}
        />

        <FeatureLeftSection
          title="Maintenance scheduling and tracking"
          subtitle="Create tasks for one off and scheduled maintenance. Record repairs during checkout. Assign to team members and add photos and comments directly from the mobile app."
          link="/product"
          image={getImage(data.maintenance)}
        />

        {/* TRIPLE FEATURE SECTION ROW */}
        <FeaturesRow />

        {/* TESTIMONIALS */}

        {/* ACTIVATION */}
        <Activation
          title="Ready to simplify your operation?"
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
  hero: file(relativePath: {eq: "homepage.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 600)
    }
  }
  mobileCheckin: file(relativePath: {eq: "mobile-checkin.png"}) {
    ...imageData
  }
  maintenance: file(relativePath: {eq: "maintenance.png"}) {
    ...imageData
  }
}

`

export default IndexPage
