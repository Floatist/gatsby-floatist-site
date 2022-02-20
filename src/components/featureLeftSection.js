import * as React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import { title, section, featureText } from './layout.module.css'


const FeatureLeftSection = (props) => {

    return (
        <Container className={section}>
            <Row className="align-items-center">
                <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                    <div className={featureText}>
                        <h1 className={title}>{props.title}</h1>
                        <h5>{props.subtitle}</h5>
                        <Link to={props.link}>View features</Link>
                    </div>

                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                    <img src="/images/graphic1.jpg" class="img-fluid" alt="graphic"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default FeatureLeftSection