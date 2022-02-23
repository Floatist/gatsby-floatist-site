import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { contactButton, learnButton } from './heroSection.module.css'
import { title, subtitle, section, featureText } from './layout.module.css'



const HeroSection = () => {

    return (
        <Container className={section}>
            <Row className="align-items-center">
                <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                    <div className={featureText}>
                        <h1 className={title}>The only tool you need to manage your fleet</h1>
                        <h5 className={subtitle}>Optimize your business processes and improve your customer's experience</h5>
                        <Button size="lg" variant="secondary" className={contactButton}>Contact us</Button>
                        <Button size="lg" variant="outline-secondary" className={learnButton}>Learn more</Button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                    <StaticImage
                     src="../images/marina.jpg" 
                     className="img-fluid" 
                     alt="marina"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection