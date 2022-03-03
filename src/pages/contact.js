import * as React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ContactForm from '../components/contactForm'
import Layout from '../components/layout'
import { section, text, form, beigeShape, sandShape } from './contact.module.css'

const ContactPage = () => {

    const titleStyle = {
        fontFamily: 'Helvetica Neue',
        fontSize: '40px',
        fontWeight: '700'
    }

    return (
        <Layout pageTitle="Contact us">
            <Container className={section}>
                <div className={beigeShape}></div>
                <div className={sandShape}></div>

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
                                    <i class="fa-solid fa-check"></i> Explore use cases for your team
                                </li>
                            </ul>
                        </Container>
                    </Col>

                    <Col md={6}>
                        <ContactForm className={form} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ContactPage