import * as React from "react"
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import FeatureRightSection from "../components/featureRightSection"
import FeatureLeftSection from "../components/featureLeftSection"
import HeroSection from "../components/heroSection"
import Activation from "../components/activation"
import FeaturesRow from "../components/featuresRow"

const IndexPage = ({ data }) => {

  return (
    <Layout pageTitle="The only tool you need">
      {/* HERO SECTION*/}
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
      <Activation />

      {/* NEWSLETTER */}


    </Layout>
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
  hero: file(relativePath: {eq: "laptop-and-phone.png"}) {
    ...imageData
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
