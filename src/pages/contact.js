import * as React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ContactForm from '../components/contactForm'
import Activation from '../components/activation'
import Layout from '../components/layout'
import { section, text, beigeShape, sandShape, container } from './contact.module.css'

const ContactPage = () => {

    const titleStyle = {
        fontFamily: 'Helvetica Neue',
        fontSize: '40px',
        fontWeight: '700'
    }

    return (
        <Layout pageTitle="Contact us">
            <Container fluid className={container}>
                <div className={beigeShape}></div>
                <div className={sandShape}></div>

            <Container fluid className={section}>
                <Row>
                    <Col md={6}>
                        <Container fluid className={text}>
                            <h1 style={titleStyle}>Request a demo</h1>
                            <p>We're happy to show you how Floatist can help your business.</p>
                            <ul className="list-unstyled">
                                <li>
                                    <i class="fa-solid fa-check"></i> Learn how to save costs and increase productivity
                                </li>
                                <li>
                                    <i class="fa-solid fa-check"></i> Get pricing information
                                </li>
                                <li>
                                    <i class="fa-solid fa-check"></i> Explore use cases for your business
                                </li>
                            </ul>
                        </Container>
                    </Col>

                    <Col md={6}>
                        <ContactForm />
                    </Col>
                </Row>

            </Container>
            </Container>

            <Activation
                title="You can do it, we can help"
            />
        </Layout>
    )
}

export default ContactPage