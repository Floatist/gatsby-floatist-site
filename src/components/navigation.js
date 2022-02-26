import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navbar, navItem, navbarBrand, navButton } from './navigation.module.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './navigation.module.css'

const Navigation = () => {

    return (
        <Navbar className={navbar} variant="light" expand="lg">
            <Container>
                <Navbar.Brand className={navbarBrand}>
                    <Link to="/">
                        <StaticImage
                            alt="floatist"
                            src="../images/logo.png"
                            className="d-inline-block align-top"
                            width={120}
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
                            <Button className={navButton} size="lg">
                                <Link to="/contact" role="button" activeClassName="active">Contact us</Link>
                            </Button>
                        </Nav.Item >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation