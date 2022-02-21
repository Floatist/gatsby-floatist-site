import * as React from "react"
import FeatureRightSection from "../components/featureRightSection"
import FeatureLeftSection from "../components/featureLeftSection"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"
import Activation from "../components/activation"
import FeaturesRow from "../components/featuresRow"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Floatist">
      {/* HERO SECTION LEFT*/}
      <HeroSection />
      <FeatureRightSection
        title="Mobile check-in / out"
        subtitle="Let your customers familiarize themselves with the boat even before arrival, and allow them to check-in guided by our app. Say goodbye to the Saturday peak!"
        link="/features"
      />

      <FeatureLeftSection 
        title="Maintenance scheduling and tracking"
        subtitle="Create tasks for one off and scheduled maintenance. Record repairs during checkout. Assign to team members and add photos and comments directly from the mobile app!"
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

export default IndexPage
