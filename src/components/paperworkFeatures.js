import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { section, heading, headingRow, listHeading, listItem, list, featuresRow, featureText, featureCol } from './paperworkFeatures.module.css'

const PaperworkFeatures = () => {

    return (
        <Container className={section} id="paperwork">

            {/* Header */}
            <Row className={headingRow}>
                <Col md={6} >
                    <h1 className={heading}>
                        <span style={{ color: "#0097BE" }}> Handle paperwork before arrival</span> through the Floatist app.
                    </h1>
                </Col>
                <Col md={6}>
                    <StaticImage
                        src="../images/mobile-checkin.png"
                        className="img-fluid mx-auto d-block"
                        alt="mobile-check-in"
                        imgStyle={{ objectFit: "contain" }}
                        height={400}
                    />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={7}>
                    <StaticImage
                        src="../images/home-and-docs-app.png"
                        className="img-fluid mx-auto d-block"
                        alt="mobile-app"
                        imgStyle={{ objectFit: "contain" }}
                        height={450}
                    />
                </Col>
                <Col md={5}>
                    <div className={list}>
                        <h3 className={listHeading}>Enable customers to</h3>
                        <ul>
                            <li className={listItem}>Upload their licenses</li>
                            <li className={listItem}>Fill in the crew list</li>
                            <li className={listItem}>Sign and view the rental agreement</li>
                        </ul>
                    </div>

                </Col>
            </Row>

            <Row className={featuresRow}>
                <Col lg={4}>
                    <div className={featureCol}>
                        <i class="fa-solid fa-circle-check fa-3x" style={{ color: "#0097BE" }}></i>
                        <p className={featureText}>Ensure all documents are completed before check-in day</p>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className={featureCol}>
                        <i class="fa-solid fa-circle-check fa-3x" style={{ color: "#0097BE" }}></i>
                        <p className={featureText}>Eliminate endless email chains to gather all needed information</p>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className={featureCol}>
                        <i class="fa-solid fa-circle-check fa-3x" style={{ color: "#0097BE" }}></i>
                        <p className={featureText}>Improve customer experience by building excitement for the upcoming trip through the app</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default PaperworkFeatures