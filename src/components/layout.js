import * as React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby'


import Navigation from './navigation'
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400&family=Poppins:wght@200;300;400;500&family=Roboto+Slab:wght@400;500&family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"/>
            <Helmet>
                <script src={withPrefix('freshchat.js')} type="text/javascript" />
            </Helmet>
            <Navigation />
            {/* <Container> */}
            {children}
            {/* </Container> */}
            <Footer />
        </div>
    )
}
export default Layout