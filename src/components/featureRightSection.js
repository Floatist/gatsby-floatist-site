import * as React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage } from 'gatsby-plugin-image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { section, container, title, subtitle, text, featureLink, row } from './featureRightSection.module.css'


const FeatureRightSection = (props) => {

    const createLink = () => {
        if (props.link) {
            return <AnchorLink to={props.link} className={featureLink}>View features <i className="fa-solid fa-arrow-right"></i></AnchorLink>
        } else {
            return ''
        }
    }

    const renderSectionStyle = () => {
        if (props.backgroundColor) {
            return { backgroundColor: props.backgroundColor }
        } else {
            return { backgroundImage: "radial-gradient(ellipse farthest-corner at -20% 850%, #DDD1C5 0%, #F4F3F0 75%, #DDD1C5 75%)"}
        }
    }

    return (
        <div className={section} style={renderSectionStyle()}>
            <Container fluid className={container}>
                <Row className={row}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
                        <GatsbyImage
                            image={props.image}
                            alt="graphic"
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className={text}>
                        <h3 className={title}>{props.title}</h3>
                        <p className={subtitle}>{props.subtitle}</p>
                        {createLink()}
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default FeatureRightSection