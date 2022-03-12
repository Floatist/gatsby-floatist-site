import * as React from 'react'
import Container from 'react-bootstrap/Container'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Video } from 'gatsby-video'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import FeatureRightSection from '../components/featureRightSection'
import ProductHero from '../components/productHero'
import Activation from '../components/activation'
import TwoFeatures from '../components/twoFeatures'
import { container } from './product.module.css'
import { Row } from 'react-bootstrap'
import FeaturesSummary from '../components/featuresSummary'
import MobileCheckinFeatures from '../components/mobileCheckinFeatures'
import MaintenanceFeatures from '../components/maintenanceFeatures'
import PaperworkFeatures from '../components/paperworkFeatures'


const ProductPage = ({ data }) => {

  console.log(data)

  // const videos = data.maintenanceVideo.childVideoFfmpeg

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
          subtitle="Empower your customers to self check-in, handle paperwork through the app, and streamline your maintenance tasks between charters."
          image={getImage(data.apps)}
          backgroundColor="white"
        />


        {/* NEW SECTION WITH OVERVIEW FEATURES */}
        <FeaturesSummary />
        <MobileCheckinFeatures />
        <MaintenanceFeatures />
        <PaperworkFeatures />
        
        {/* ACTIVATION */}
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