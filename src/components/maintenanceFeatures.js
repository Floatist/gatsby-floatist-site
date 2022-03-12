import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Container } from 'react-bootstrap'
import { sectionWithBackgroundColor, section, topRow, heading, videoCol, video, middleRow, stackedChecksText, checksCol, thirdRow, featureCol, featureText } from './maintenanceFeatures.module.css'

const MaintenanceFeatures = () => {

    return (
        <Container fluid className={sectionWithBackgroundColor}>
            <Container className={section}>
                {/* Heading plus moving video */}
                <Row className={topRow}>
                    <Col md={6} className={heading}>
                        <h1>Schedule, track, create and assign maintenance issues <span style={{ color: "#0097BE" }}>from the backoffice and the mobile app.</span></h1>
                    </Col>
                    <Col md={6} className={videoCol}>
                        <video className={video} autoPlay muted loop>
                            <source src="/maintenance.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>

                {/* maintenance graphic and three stacked features with check icon*/}
                <Row className={middleRow}>
                    <Col md={6}>
                        <StaticImage
                            src="../images/maintenance.png"
                            className="img-fluid mx-auto d-block"
                            alt="push-notifications"
                            imgStyle={{ objectFit: "contain" }}
                        />
                    </Col>

                    <Col md={6} className={checksCol}>
                        <Stack >
                            <div>
                                <i class="fa-solid fa-circle-check fa-xl" style={{ color: "#0097BE" }}></i>
                                <p className={stackedChecksText}>Create maintenance issues during check-out</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-circle-check fa-xl" style={{ color: "#0097BE" }}></i>
                                <p className={stackedChecksText}>Attach photos, set due dates, and assign to team members</p>

                            </div>
                            <div>
                                <i class="fa-solid fa-circle-check fa-xl" style={{ color: "#0097BE" }}></i>
                                <p className={stackedChecksText}>Perform routine maintenance per manufacturer's recommendations templates</p>
                            </div>
                        </Stack>
                    </Col>
                </Row>

                {/* Two features with icon */}
                <Row className={thirdRow}>

                    <Col md={6} className={featureCol}>
                        <div>
                            <i class="fa-solid fa-download fa-4x"></i>
                            <p className={featureText}>Download reports for advanced analytics and sharing with third parties.</p>
                        </div>
                    </Col>

                    <Col md={6} className={featureCol}>
                        <div>
                            <i class="fa-solid fa-laptop fa-4x"></i>
                            <p className={featureText}>Empower yacht owners to view their yacht's data by providing a dedicated login to their dashboard.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>

    )

}

export default MaintenanceFeatures