import * as React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ContactForm from '../components/contactForm'
import Activation from '../components/activation'
import Layout from '../components/layout'
import { section, text, beigeShape, sandShape, container, listItem, paragraph } from './contact.module.css'

const ContactPage = () => {

    const titleStyle = {
        fontFamily: 'Larsseit',
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
                            <p className={paragraph}>We're happy to show you how Floatist can help your business.</p>
                            <ul className="list-unstyled">
                                <li className={listItem}>
                                    <i className="fa-solid fa-check fa-lg"></i> Explore use cases for your business
                                </li>
                                <li className={listItem}>
                                    <i className="fa-solid fa-check fa-lg"></i> Learn how Floatist can help you to increase productivity
                                </li>
                                <li className={listItem}>
                                    <i className="fa-solid fa-check fa-lg"></i> Get pricing information and learn how to save costs
                                </li>
                            </ul>
                            <h5>Prefer contacting us directly?</h5>
                            <p>Phone</p>
                            <p className={paragraph}>🇬🇷 +30 697 5508772 </p>
                            <p>Email</p>
                            <p>cindy@floatist.com</p>
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