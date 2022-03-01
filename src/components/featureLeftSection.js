import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Row, Col, Container } from 'react-bootstrap'
import { section, featureLink, row } from './featureLeftSection.module.css'


const FeatureLeftSection = (props) => {

    return (
        <div className={section}>
            <Container>
                <Row className={row}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div>
                            <h1>{props.title}</h1>
                            <p>{props.subtitle}</p>
                            <Link to="/product" className={featureLink}>View features <i class="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
                        <StaticImage
                            src="../images/maintenance.png"
                            className="img-fluid"
                            alt="maintenance"
                            width={450}
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default FeatureLeftSection