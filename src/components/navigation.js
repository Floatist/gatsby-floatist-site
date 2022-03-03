import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import { navbar, navItem, navbarBrand, navbarCollapse, navButton, navLogin } from './navigation.module.css'

const Navigation = () => {


    const [navBackground, setNavBackground] = useState({ backgroundColor: "transparent" })
    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {

        const height = window.innerHeight

        const transparent = {
            backgroundColor: "transparent",
            border: "none"
        }

        const white = {
            backgroundColor: "white",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        }

        const handleScroll = () => {
            const show = window.scrollY > height / 12
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

                <Navbar.Toggle className={navbarCollapse} />


                <Navbar.Collapse id="navbarResponsive" className={navbarCollapse}>
                    <Nav as="ul">
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/product" className="nav-link" activeClassName="active">Product</Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                        </Nav.Item >
                        <Nav.Item as="li" className={navItem}>
                            <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
                        </Nav.Item>

                    </Nav>
                    {/* Align this one to the right */}
                    <Nav as="ul" className="ms-auto">
                        <Nav.Item as="li" className={navItem}>
                            <Stack direction="horizontal" gap={4}>
                                <Link to="/contact" className={navLogin} activeClassName="active">Sign in</Link>
                                <SecondaryButton className={navButton}>
                                    <Link to="/contact" activeClassName="active"><i className="fa-solid fa-envelope"></i> Contact us</Link>
                                </SecondaryButton>
                            </Stack>

                        </Nav.Item >
                    </Nav>
                </Navbar.Collapse>



            </Container>
        </Navbar>
    )
}

export default Navigation