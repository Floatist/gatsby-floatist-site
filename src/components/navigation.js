import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navbar, navItem } from './navigation.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {

    return (
        <Navbar className={navbar} bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <StaticImage
                            alt="floatist"
                            src="../images/logo.png"
                            className="d-inline-block align-top"
                            width={150}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul">
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/product" className="nav-link" activeClassName="active">Product</Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/integrations" className="nav-link" activeClassName="active">Integrations</Link>
                        </Nav.Item >
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
                        </Nav.Item>

                    </Nav>
                    {/* Align this one to the right */}
                    <Nav as="ul" className="ms-auto">
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/contact" className="btn btn-outline-primary" role="button" activeClassName="active">Contact us</Link>
                        </Nav.Item >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation