import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/contactForm'

// import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const ContactPage = () => {

    return (
        <Layout pageTitle="Contact us">
            <ContactForm />   
        </Layout>
    )
}

export default ContactPage