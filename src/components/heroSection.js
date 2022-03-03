import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import PrimaryButtonOutline from '../styles/styled-component/PrimaryButtonOutline'
import { container, bg, contactButton, learnButton, heroText, heroSection } from './heroSection.module.css'

const HeroSection = ({ title, subtitle, image, backgroundUrl }) => {

    const titleStyle = {
        fontSize: '50px',
        fontFamily: 'Helvetica Neue',
        fontWeight: '700'
    }

    const paragraphStyle = {
        fontSize: '18px',
        fontFamily: 'poppins',
        fontWeight: '300'
    }

    return (
        <div className={container}>
            <div className={bg} style={{ backgroundImage: `url(${backgroundUrl})`}}>
                Floatist
            </div>
            <div className={heroSection}>
                <Container className={container}>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={7} lg={7} xl={6} mt={6} className="my-auto">
                            <div className={heroText} >
                                <h1 style={titleStyle}>{title}</h1>
                                <p style={paragraphStyle}>{subtitle}</p>
                                <SecondaryButton size="lg" className={contactButton}>
                                    <Link to="/contact">Request a demo</Link>
                                </SecondaryButton>
                                <PrimaryButtonOutline size="lg" className={learnButton}>
                                    <Link to="/product" >Learn more</Link>
                                </PrimaryButtonOutline>
                                
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5} className="my-auto">
                            <GatsbyImage image={image} alt="graphic"/>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>


    )
}

export default HeroSection