import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import PrimaryButtonOutline from '../styles/styled-component/PrimaryButtonOutline'
import { row, paragraph, contactButton, learnButton, heroText, heroSection } from './homeHero.module.css'

const HomeHero = ({ title, subtitle, image }) => {

    const titleStyle = {
        fontSize: '50px',
        fontFamily: 'Larsseit',
        fontWeight: '700'
    }

    return (
        <Container fluid className={heroSection}>
            <Row className={row}>
                <Col sm={12} md={6} lg={5} className={heroText}>
                    <h1 style={titleStyle}>{title}</h1>
                    <p className={paragraph}>{subtitle}</p>
                    <SecondaryButton size="lg" className={contactButton}>
                        <Link to="/contact">Request a demo</Link>
                    </SecondaryButton>
                    <PrimaryButtonOutline size="lg" className={learnButton}>
                        <Link to="/product#features">Learn more</Link>
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