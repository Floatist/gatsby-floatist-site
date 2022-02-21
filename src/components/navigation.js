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
                            width="140"
                            height="auto"
                            className="d-inline-block align-top"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul">
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                        </Nav.Item >
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/features" className="nav-link" activeClassName="active">Features</Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/pricing" className="nav-link" activeClassName="active">Pricing</Link>
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