import * as React from 'react'
import Container from 'react-bootstrap/Container'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import FeatureRightSection from '../components/featureRightSection'
import ProductHero from '../components/productHero'
import Activation from '../components/activation'
import TwoFeatures from '../components/twoFeatures'
import { container } from './product.module.css'


const ProductPage = ({ data }) => {

  console.log(data)

  return (
    <Container fluid className={container}>
      <Layout pageTitle="Product">

        {/* HERO SECTION*/}
        <ProductHero 
        title="One platform for your team and your fleet"
        subtitle="Floatist not only makes the charter experience better for your customers, but sets your team up for success, and keeps your business in sync. It is everything you need, in one powerful tool."
        image={getImage(data.connectedPlatform)}
        />

        {/* TWO SCREENS APP IMAGE + BOOKING MANAGEMENT*/}
        <FeatureRightSection
          title="Floatist is the foundation built to help you create the best customer experiences"
          subtitle="A tool that hits the sweet spot. Work smarter, boost staff efficiency, and set your team up for success."
          image={getImage(data.apps)}
          backgroundColor="white"
        />


        {/* TWO ROWS COMPONENT: Platform + mobile check in*/}
        <TwoFeatures
          topFeatureTitle="Floatist provides the complete fleet management solution that’s easy to use and scales with your business."
          topFeatureSubtitle="Empower your customers to self check-in, handle paperwork through the app, and streamline your maintenance tasks between charters."
          topFeatureImage={getImage(data.connectedPlatform)}
          bottomFeatureTitle="Offer self check-in to your customers"
          bottomFeatureSubtitle="Customers can complete check-in at their own pace – while your staff have their hands free to assist where needed."
          bottomFeatureImage={getImage(data.mobileCheckin)}
          backgroundColor="#F4F3F0"
        />

        {/* TWO ROWS COMPONENT:  Maintenance + Reporting */}
        <TwoFeatures
          topFeatureTitle="Manage issues from one unified place"
          topFeatureSubtitle="Make it easier to track, prioritize, assign and respond to issues with one unified workspace, from the browser to the mobile app."
          topFeatureImage={getImage(data.maintenance)}
          bottomFeatureTitle="Report back to stakeholders with ease"
          bottomFeatureSubtitle="Save yourself from end-of-quarter admin by enabling yacht owners to access their yacht's log in real-time."
          bottomFeatureImage={getImage(data.reporting)}
          backgroundColor="white"
        />

        <Activation
          title="Take the lead"
          buttonText="Request a demo"
        />

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
  apps: file(relativePath: {eq: "app-two-screens.png"}) {
    id
    childImageSharp {
      gatsbyImageData
    }
  }
  connectedPlatform: file(relativePath: {eq: "connected-platform.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 480)
    }
  }
  booking: file(relativePath: {eq: "booking.png"}) {
    ...imageData
  }
  mobileCheckin: file(relativePath: {eq: "mobile-checkin.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 350)
    }
  }
  reporting: file(relativePath: {eq: "reporting-graphic.png"}) {
    id
    childImageSharp {
      gatsbyImageData(height: 350)
    }
  }
  maintenance: file(relativePath: {eq: "maintenance.png"}) {
      ...imageData
  }
}
`

export default ProductPage