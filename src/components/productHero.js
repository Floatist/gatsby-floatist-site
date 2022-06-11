import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { pageTitle, row, paragraph, heroText, heroSection } from './productHero.module.css'


const ProductHero = ({ title, subtitle, image }) => {

    return (
        <Container className={heroSection}>
            <Row className={row}>
                <Col sm={12} md={6} lg={6} className={heroText}>
                    <h1 className={pageTitle}>{title}</h1>
                    <p className={paragraph}>{subtitle}</p>
                </Col>
                <Col sm={12} md={6} lg={6} className="text-center">
                    <GatsbyImage image={image} alt="graphic" height={500} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProductHero