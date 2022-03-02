import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import FeatureLeftSection from '../components/featureLeftSection'
import FeatureRightSection from '../components/featureRightSection'
import Layout from '../components/layout'
import HeroSection from '../components/heroSection'

const ProductPage = ({ data }) => {

    console.log(data)

    return (
        <Layout pageTitle="Product">
            {/* HERO SECTION*/}
            <HeroSection />

            <FeatureRightSection
                title="Booking management"
                subtitle="Directly push your availability to leading aggregators such as Nausys, MMK and Yacht Sentinel. No need to duplicate you data input in several different providers."
                image={getImage(data.booking)}
            />

            <FeatureLeftSection
                title="Mobile check-in / out"
                subtitle="Let your customers familiarize themselves with the boat even before arrival, and allow them to check-in guided by our app. Say goodbye to the Saturday peaks."
                image={getImage(data.mobileCheckin)}
            />

            <FeatureRightSection
                title="Reporting"
                subtitle="Run and download reports to share with any stakeholders. Provide a login to boat owners and empower them to keep track of their boats record."
                image={getImage(data.reporting)}
            />

            <FeatureLeftSection
                title="Maintenance tracking"
                subtitle="Keep track of all your maintenance tasks in our tool. Create tasks for one off and scheduled maintenance. Record repairs during checkout. Assign to team members and add photos and comments directly from the mobile app."
                image={getImage(data.maintenance)}
            />

            <FeatureRightSection
                title="Find and hire crew"
                subtitle="Use our crew portal to invite captains and chefs for your charters. Choose from our extensive network of the highest rated certified crew. Finding, assigning and paying crew has never been easier."
                image={getImage(data.reporting)}
            />

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
  booking: file(relativePath: {eq: "booking.png"}) {
    ...imageData
  }
  mobileCheckin: file(relativePath: {eq: "mobile-checkin.png"}) {
    ...imageData
  }
  reporting: file(relativePath: {eq: "reporting.png"}) {
      ...imageData
  }
  maintenance: file(relativePath: {eq: "maintenance.png"}) {
      ...imageData
  }
}
`

export default ProductPage