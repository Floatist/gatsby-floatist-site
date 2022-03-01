import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Container, Row, Col } from 'react-bootstrap'

import { footer, footerLink, footerLogo, footerTitle, footerCopyright } from './footer.module.css'

const Footer = () => {

    return (
        <div className={footer}>
            <Container>
                <Row>
                    {/* Logo */}
                    <Col xs={12} sm={4} className={footerLogo}>
                        <Link to="/">
                            <StaticImage
                                alt="floatist"
                                src="../images/logo-white.png"
                                width={140}
                                className="d-inline-block align-top"
                            />
                            
                        </Link>
                    </Col>

                        {/* Column 1 */}
                        <Col xs={6} sm={2}>
                            <p className={footerTitle}>PRODUCT</p>
                            <ul className="list-unstyled">
                                <li><Link to="/product" className={footerLink}>Features</Link></li>
                                <li><Link to="/contact" className={footerLink}>Contact us</Link></li>
                                <li><Link to="/support" className={footerLink}>Support</Link></li>

                            </ul>
                        </Col>

                        {/* Column 2 */}
                        <Col xs={6} sm={2}>
                            <p className={footerTitle}>LEGAL</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className={footerLink}>Privacy Policy</Link></li>
                                <li><Link to="/" className={footerLink}>Terms & Conditions</Link></li>
                            </ul>
                        </Col>

                        {/* Column 3 */}
                        <Col xs={6} sm={2}>
                            <p className={footerTitle}>COMPANY</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className={footerLink}>Careers</Link></li>
                                <li><Link to="/about" className={footerLink}>Team</Link></li>

                            </ul>
                        </Col>

                        {/* Column 4 */}
                        <Col xs={6} sm={2}>
                            <p className={footerTitle}>SOCIAL</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className={footerLink}>Twitter</Link></li>
                                <li><Link to="/" className={footerLink}>LinkedIn</Link></li>
                            </ul>
                        </Col>

                    <div className={footerCopyright}>
                        <p className="text-center">&copy; Floatist {new Date().getFullYear()} <i class="fa-solid fa-sailboat"></i></p>
                    </div>
                </Row>

            </Container>


        </div>
    )
}

export default Footer