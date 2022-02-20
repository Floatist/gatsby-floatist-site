import * as React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { contactButton, learnButton } from './heroSection.module.css'
import { title, section, featureText } from './layout.module.css'


const HeroSection = () => {

    return (
        <Container className={section}>
            <Row className="align-items-center">
                <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                    <div className={featureText}>
                        <h1 className={title}>The full-rigging app for the yacht charter industry</h1>
                        <h5>Optimize your business processes and improve your customer's experience</h5>
                        <Button size="lg" className={contactButton}>Contact us</Button>
                        <Button size="lg" variant="outline-primary" className={learnButton}>Learn more</Button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                    <img src="/images/marina.jpg" class="img-fluid" alt="..."></img>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection