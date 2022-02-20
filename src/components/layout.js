import * as React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap';

import { heading } from './layout.module.css'
import Navigation from './navigation'
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Navigation />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    )
}
export default Layout