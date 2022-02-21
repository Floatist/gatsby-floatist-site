import * as React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap';

import Navigation from './navigation'
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigi />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500&family=Poppins:wght@200;300;500&family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
            <Navigation />
            {/* <Container> */}
            {children}
            {/* </Container> */}
            <Footer />
        </div>
    )
}
export default Layout