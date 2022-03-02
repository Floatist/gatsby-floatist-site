import * as React from "react"
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import FeatureRightSection from "../components/featureRightSection"
import FeatureLeftSection from "../components/featureLeftSection"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"
import Activation from "../components/activation"
import FeaturesRow from "../components/featuresRow"

// markup
const IndexPage = ({ data }) => {

  const image = getImage(data.file)
  console.log(data.file.id)

  return (
    <Layout pageTitle="The only tool you need">

      {/* HERO SECTION*/}
      <HeroSection 
        image={image}
      />

      <FeatureRightSection
        title="Mobile check-in / out"
        subtitle="Let your customers familiarize themselves with the boat even before arrival, and allow them to check-in guided by our app. Say goodbye to the Saturday peaks."
        link="/features"
      />

      <FeatureLeftSection 
        title="Maintenance scheduling and tracking"
        subtitle="Create tasks for one off and scheduled maintenance. Record repairs during checkout. Assign to team members and add photos and comments directly from the mobile app."
        link="/features"
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

export const query = graphql`
query {
  file(relativePath: {eq: "heroGraphic.png"}) {
    id
    childImageSharp {
      gatsbyImageData
    }
  }
}

`
export default IndexPage
