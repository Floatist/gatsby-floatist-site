import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navbar, navItem, navbarBrand, navButton } from './navigation.module.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './navigation.module.css'

const Navigation = () => {

    const [navBackground, setNavBackground] = useState(transparent)
    const navRef = React.useRef()
    navRef.current = navBackground

    const transparent = {
        backgroundColor: "transparent",
        border: "none"
    }

    const white = {
        backgroundColor: "white",
        border: "solid",
        borderColor: "#5A5B67"
    }

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (show) {
                setNavBackground(white)
            } else {
                setNavBackground(transparent)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // bg={navBackground}

    return (
        <Navbar className={navbar} variant="light fixed-top" expand="lg" style={navBackground}>
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