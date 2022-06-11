import * as React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Container } from 'react-bootstrap'
import { pageTitle, section, container, link, text, icon, arrow, paragraph, featureTitle, featureParagraph, rectangle, square, col } from './featuresSummary.module.css'

const FeaturesSummary = () => {

    return (
        <div className={section}>
            <Container className={container} id="features">
                <div className={text}>
                    <h1 className={pageTitle}>Work more efficiently</h1>
                    <p className={paragraph}>Work from a unified platform - no matter if you are on the dock or in the office.</p>
                </div>

                <Row>
                    <Col className={col}>
                        <a href="#mobile" className={link}>
                            <div className={square}>
                                <div className={icon}><i class="fa-solid fa-mobile-screen-button fa-2x"></i></div>
                                <h5 className={featureTitle}>
                                    Mobile check-in / out
                                </h5>
                                <p className={featureParagraph}>Empower your customers to self check-in / out, and familiarise themselves even before arrival.</p>
                                <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                            </div>
                        </a>

                    </Col>

                    <Col className={col}>
                        <a href="#maintenance" className={link}>
                            <div className={square}>
                                <div className={icon}><i class="fa-solid fa-wrench fa-2x"></i></div>
                                <h5 className={featureTitle}>Maintenance hub</h5>
                                <p className={featureParagraph}>Schedule, track, create and assign issues from the backoffice and the mobile app</p>
                                <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                            </div>
                        </a>
                    </Col>

                    <Col className={col}>
                        <Stack gap={4}>
                            <a href="#paperwork" className={link}>
                                <div className={rectangle}>
                                    <div className={icon}><i class="fa-solid fa-file-contract fa-2x"></i></div>
                                    <h5 className={featureTitle}>Handle paperwork</h5>
                                    <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                                </div>
                            </a>
                            <a href="#reporting" className={link}>
                                <div className={rectangle}>
                                    <div className={icon}><i class="fa-solid fa-square-poll-vertical fa-2x"></i></div>
                                    <h5 className={featureTitle}>Reporting</h5>
                                    <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                                </div>
                            </a>
                        </Stack>
                    </Col>

                    <Col className={col}>
                        <a href="#booking" className={link}>
                            <div className={rectangle}>
                                <div className={icon}><i class="fa-solid fa-calendar-days fa-2x"></i></div>
                                <h5 className={featureTitle}>Booking management</h5>
                                <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FeaturesSummary