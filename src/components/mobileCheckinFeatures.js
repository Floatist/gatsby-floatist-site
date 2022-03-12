import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { section, heading, image, pushMessagesRow, pushMessagesText, pushMessagesTitle, featureCol, featuresRow, featureIcon, featureText } from './mobileCheckinFeatures.module.css'

const MobileCheckinFeatures = () => {

    return (
        <Container className={section}>

            {/* Header and check-in flow screens */}
            <Row className="align-items-center">
                <Col md={5} className={heading}>
                    <h1>
                        <span style={{ color: "#0097BE" }}>Empower your customers to self check-in / out,</span> and familiarize themselves even before arrival.
                    </h1>
                </Col>
                <Col md={7} className={image}>
                    <StaticImage
                        src="../images/check-in-frames.png"
                        className="img-fluid mx-auto d-block"
                        alt="check-in-flow"
                    />
                </Col>
            </Row>

            {/* Push messages */}
            <Row className={pushMessagesRow}>
                <Col md={6} className={image}>
                    <StaticImage
                        src="../images/push-messages.png"
                        className="img-fluid mx-auto d-block"
                        alt="push-notifications"
                        imgStyle={{ objectFit: "contain" }}
                        height={230}
                    />

                </Col>
                <Col md={6} >
                    <div className={pushMessagesText}>
                        <h5 className={pushMessagesTitle}>
                            Custom push notifications
                        </h5>
                        <p>
                            Notify customers of important events while they sit back and enjoy the first day of their vacation.
                        </p>

                    </div>

                </Col>
            </Row>

            {/* 3 features mobile check-in explained */}
            <Row className={featuresRow}>

                <Col lg={4}>
                    <div className={featureCol}>
                        <div className={featureIcon}><i class="fa-brands fa-youtube fa-4x"></i></div>
                        <p className={featureText}>Provide guided check-in flows with written and video instructions</p>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className={featureCol}>
                        <div className={featureIcon}><i class="fa-solid fa-chalkboard-user fa-4x"></i></div>
                        <p className={featureText}>Customers can look back at the instructions at any time during the charter</p>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className={featureCol}>
                        <div className={featureIcon}><i class="fa-solid fa-business-time fa-4x"></i></div>
                        <p className={featureText}>Technicians have their hands free and can assist where needed</p>
                    </div>
                </Col>
            </Row>

        </Container>

    )

}

export default MobileCheckinFeatures