import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Helmet from 'react-helmet';
import { withPrefix, useStaticQuery, graphql } from 'gatsby'
import './layout.module.css'
import Navigation from './navigation'
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            {/* FONTS FROM GOOGLE FONTS */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400&family=Josefin+Sans:wght@300;400&family=Poppins:wght@200;300;500&family=Roboto+Slab:wght@400;500&family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"/>

            <link rel="favicon" href="favicon.ico" type="image/x-icon" />

            {/* FONTAWESOME */}
            <Helmet>
                <script src="https://kit.fontawesome.com/47e715a13a.js" crossOrigin="anonymous"></script>
            </Helmet>

            {/* FRESHDESK / FRESHCHAT CHAT WIDGET */}
            <Helmet>
                <script src={withPrefix('freshchat.js')} type="text/javascript" />
            </Helmet>

            {/* Freshsales CRM TRACKING CODE */}
            <Helmet>
                <script src='//eu.fw-cdn.com/10218683/155970.js' chat='false'></script>
            </Helmet>

            <Helmet>
                <script src={withPrefix('freshsales.js')} type="text/javascript" />
            </Helmet>

            <Navigation />
            {children}
            <Footer />
        </div>
    )
}
export default Layout