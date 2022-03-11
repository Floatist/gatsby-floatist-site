import * as React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Container } from 'react-bootstrap'
import { section, container, text, icon, arrow, paragraph, featureTitle, rectangle, square, row, col } from './featuresSummary.module.css'

const FeaturesSummary = () => {

    const titleStyle = {
        fontSize: '40px',
        fontFamily: 'Helvetica Neue',
        fontWeight: '700'
    }

    return (
        <div className={section}>
            <Container className={container}>
                <div className={text}>
                    <h1 style={titleStyle}>Work more efficiently</h1>
                    <p className={paragraph}>Work from a unified platform - no matter if your staff is on the dock or in the office.</p>
                </div>

                <Row>
                    <Col className={col}>
                        <div className={square}>
                            <div className={icon}><i class="fa-solid fa-mobile-screen-button fa-2x"></i></div>
                            <h5 className={featureTitle}>
                                Mobile check-in / out
                            </h5>
                            <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                        </div>
                    </Col>

                    <Col className={col}>
                        <div className={square}>
                            <div className={icon}><i class="fa-solid fa-wrench fa-2x"></i></div>
                            <h5 className={featureTitle}>Maintenance hub</h5>
                            <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                        </div>
                    </Col>

                    <Col className={col}>
                        <Stack gap={4}>
                            <div className={rectangle}>
                                <div className={icon}><i class="fa-solid fa-file-contract fa-2x"></i></div>
                                <h5 className={featureTitle}>Handle paperwork</h5>
                                <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>

                            </div>
                            <div className={rectangle}>
                                <div className={icon}><i class="fa-solid fa-square-poll-vertical fa-2x"></i></div>
                                <h5 className={featureTitle}>Reporting</h5>
                                <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                                
                            </div>
                        </Stack>
                    </Col>

                    <Col className={col}>
                        <div className={rectangle}>
                            <div className={icon}><i class="fa-solid fa-calendar-days fa-2x"></i></div>
                            <h5 className={featureTitle}>Booking management</h5>
                            <div className={arrow}><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FeaturesSummary