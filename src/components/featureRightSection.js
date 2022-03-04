import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { section, container, title, subtitle, text, featureLink, row } from './featureRightSection.module.css'


const FeatureRightSection = (props) => {

    const createLink = () => {
        if (props.link) {
            return <Link to={props.link} className={featureLink}>View features <i className="fa-solid fa-arrow-right"></i></Link>
        } else {
            return ''
        }
    }

    return (
        <div className={section}>
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