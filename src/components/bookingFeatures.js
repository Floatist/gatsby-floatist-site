import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { sectionWithBackgroundColor, section, heading, video, featureRow, featureCol, featureText } from "./bookingFeatures.module.css"

const BookingFeatures = () => {

    return (
        <Container fluid className={sectionWithBackgroundColor} id="booking">
            <Container className={section}>
                <Row className="align-items-center">
                    <Col md={6} className={heading}>
                        <h1>Manage all your bookings <span style={{ color: "#0097BE" }}>from one place.</span></h1>
                    </Col>
                    <Col md={6}>
                        <video className={video} autoPlay muted loop>
                            <source src="/bookings.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
                <Row className={featureRow}>
                    <Col md={6} className={featureCol}>
                        <div>
                            <i class="fa-solid fa-rotate fa-4x"></i>
                            <p className={featureText}>Sync boat availability directly with leading aggregator platforms.</p>
                        </div>
                    </Col>

                    <Col md={6} className={featureCol}>
                        <div>
                            <i class="fa-solid fa-sailboat fa-4x"></i>
                            <p className={featureText}>Plan and visualize yacht turnaround tasks more effectively.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )


}

export default BookingFeatures