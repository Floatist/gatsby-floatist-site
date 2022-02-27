import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { container, bg, contactButton, learnButton, heroText, heroImage, heroSection } from './heroSection.module.css'
import { title, subtitle } from './layout.module.css'

import styled from "styled-components";

const HeroSection = () => {

    return (
        <div className={container}>
            <div className={bg}>
                Floatist
            </div>
            <div className={heroSection}>
                <Container className={container}>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                            <div className={heroText}>
                                <h1 className={title}>The only tool you need to manage your fleet</h1>
                                <h5 className={subtitle}>Optimize your business processes and improve your customer's experience</h5>
                                <StyledButton size="lg" className={contactButton}>
                                    <Link to="/contact" >Contact us</Link>
                                </StyledButton>
                                <StyledButtonOutline size="lg" className={learnButton}>
                                    <Link to="/" >Learn more</Link>
                                </StyledButtonOutline>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className={heroImage}>
                            <StaticImage
                                src="../images/heroGraphic.png"
                                loading="eager"
                                alt="apps"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>


    )
}

const StyledButton = styled(Button)`
  background-color: #5A5B67;
  border-color: #5A5B67;
  border-radius: 12px;
  color: white !important;
  &:hover {
      background-color: #343A3F;
      border-color: #343A3F;
      color: white;
  }
`

const StyledButtonOutline = styled(Button)`
  text-color: #0097BE;
  background-color: transparent;
  border-color: #0097BE;
  border-radius: 12px;
  &:hover {
      background-color: #0097BE;
      border-color: #0097BE;
      color: white !important;
  }
  &:hover a {
    color: white !important;
}
  a {
      color: #0097BE;
      &:hover {
          color: white;
      }
  }
`

export default HeroSection