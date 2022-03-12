import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Container } from 'react-bootstrap'
import { section } from './maintenanceFeatures.module.css'

const MaintenanceFeatures = () => {

    return (
        <Container fluid className={section}>

        <Container>
            <Row>
                <Col>
                    <h1>
                        Schedule, track, create and assign maintenance issues from the backoffice and the mobile app.
                    </h1>
                </Col>
                <Col>
                    <video width="320" height="240" autoPlay muted loop>
                        <source src="/maintenance.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </Container>
        </Container>

    )

}

export default MaintenanceFeatures