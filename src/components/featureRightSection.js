import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Row, Col, Container } from 'react-bootstrap'
import { title, subtitle, section, featureText } from './layout.module.css'


const FeatureRightSection = (props) => {

    return (
        <Container className={section}>
            <Row className="align-items-center">
                <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                    <StaticImage
                     src="../images/app.jpg" 
                     className="img-fluid" 
                     alt="app"
                    />
                </Col>
                <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                    <div className={featureText}>
                        <h1 className={title}>{props.title}</h1>
                        <h5 className={subtitle}>{props.subtitle}</h5>
                        <Link to={props.link}>View features</Link>
                    </div>

                </Col>

            </Row>
        </Container>
    )
}

export default FeatureRightSection