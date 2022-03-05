import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Row, Col, Container } from 'react-bootstrap'
import { section, container, title, subtitle, text, row } from './twoFeatures.module.css'


const TwoFeatures = (props) => {

    return (
        <div className={section} style={{ backgroundColor: props.backgroundColor }}>
            <Container fluid className={container}>
                <Row className={row}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className={text}>
                        <h3 className={title}>{props.topFeatureTitle}</h3>
                        <p className={subtitle}>{props.topFeatureSubtitle}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
                        <GatsbyImage
                            image={props.topFeatureImage}
                            alt="graphic"
                        />
                    </Col>
                </Row>
                <Row className={row}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
                        <GatsbyImage
                            image={props.bottomFeatureImage}
                            alt="graphic"
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className={text}>
                        <h3 className={title}>{props.bottomFeatureTitle}</h3>
                        <p className={subtitle}>{props.bottomFeatureSubtitle}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TwoFeatures
