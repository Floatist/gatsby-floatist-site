import * as React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap';

import { heading } from './layout.module.css'
import Navbar from './navigation'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Navbar />
            <Container>
                {children}
            </Container>
        </div>
    )
}
export default Layout