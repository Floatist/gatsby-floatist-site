import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/contactForm'

// import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const ContactPage = () => {

    return (
        <Layout pageTitle="Contact us">
            {/* <Helmet>
                <script src='https://floatist.myfreshworks.com/crm/sales/web_forms/f01c6e93720c1d93df3bf3514bcae3472403c4596455e205a1e42a3fb1bc963b/form.js' crossorigin='anonymous' id='fs_f01c6e93720c1d93df3bf3514bcae3472403c4596455e205a1e42a3fb1bc963b'></script>
            </Helmet> */}


            <ContactForm />
                
        </Layout>
    )
}

export default ContactPage