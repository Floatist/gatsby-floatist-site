import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import PrimaryButtonOutline from '../styles/styled-component/PrimaryButtonOutline'
import { container, bg, contactButton, learnButton, heroText, heroSection } from './heroSection.module.css'

const HeroSection = (props) => {

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
                                <h1>The only tool you need to manage your fleet</h1>
                                <p>Optimize your business processes and improve your customer's experience</p>
                                <SecondaryButton size="lg" className={contactButton}>
                                    <Link to="/contact">Request a demo</Link>
                                </SecondaryButton>
                                <PrimaryButtonOutline size="lg" className={learnButton}>
                                    <Link to="/product" >Learn more</Link>
                                </PrimaryButtonOutline>
                                
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                            {/* <StaticImage
                                src="../images/heroGraphic.png"
                                className="img-fluid"
                                alt="apps"
                            /> */}
                            <GatsbyImage image={props.image}/>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>


    )
}

export default HeroSection