import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import PrimaryButtonOutline from '../styles/styled-component/PrimaryButtonOutline'
import { pageTitle, row, paragraph, contactButton, learnButton, heroText, heroSection } from './homeHero.module.css'

const HomeHero = ({ title, subtitle, image }) => {

    return (
        <Container fluid className={heroSection}>
            <Row className={row}>
                <Col sm={12} md={6} lg={5} className={heroText}>
                    <h1 className={pageTitle}>{title}</h1>
                    <p className={paragraph}>{subtitle}</p>
                    <SecondaryButton size="lg" className={contactButton}>
                        <Link to="/contact">Request a demo</Link>
                    </SecondaryButton>
                    <PrimaryButtonOutline size="lg" className={learnButton}>
                        <AnchorLink to="/product#features">Learn more</AnchorLink>
                    </PrimaryButtonOutline>
                </Col>
                <Col sm={12} md={6} lg={7} className="text-center">
                    <GatsbyImage image={image} alt="graphic" height={500} />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeHero