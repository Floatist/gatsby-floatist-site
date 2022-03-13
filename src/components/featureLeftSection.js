import * as React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage } from 'gatsby-plugin-image'
import { Row, Col, Container } from 'react-bootstrap'
import { text, title, subtitle, featureLink, container, row, image } from './featureLeftSection.module.css'


const FeatureLeftSection = (props) => {

    const createLink = () => {
        if (props.link) {
            return <AnchorLink to={props.link} className={featureLink}>View features <i className="fa-solid fa-arrow-right"></i></AnchorLink>
        } else {
            return ''
        }
    }

    return (
        <div>
            <Container fluid className={container}>
                <Row className={row}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className={text}>
                            <h3 className={title}>{props.title}</h3>
                            <p className={subtitle}>{props.subtitle}</p>
                            {createLink()}
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
                        <GatsbyImage
                            className={image}
                            image={props.image}
                            alt="graphic"
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default FeatureLeftSection