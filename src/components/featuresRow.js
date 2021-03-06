import * as React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from 'gatsby-plugin-image'
import { container, section, row, col, featureTitle, paragraph, featureLink } from './featuresRow.module.css'
import { Container } from 'react-bootstrap'

const FeaturesRow = ({ leftTitle, leftPar, middleTitle, middlePar, rightTitle, rightPar, leftImage, middleImage, rightImage}) => {

    return (
        <div className={section}>
            <Container fluid className={container}>
                <Row className={row}>
                    <Col md={4} className={col}>
                        <StaticImage
                            src="../images/reporting-blue.png"
                            className="img-fluid mr-auto"
                            alt="icon"
                            width={100}
                            imgStyle={{ objectFit: "contain" }}
                        />
                        <h3 className={featureTitle}>{leftTitle}</h3>
                        <p className={paragraph}>{leftPar}</p>
                        <AnchorLink to="/product#reporting" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></AnchorLink>

                    </Col>
                    <Col md={4} className={col}>
                        <StaticImage
                            src="../images/legaldocs-blue.png"
                            className="img-fluid mr-auto"
                            alt="icon"
                            width={100}
                            imgStyle={{ objectFit: "contain" }}
                        />
                        <h3 className={featureTitle}>{middleTitle}</h3>
                        <p className={paragraph}>{middlePar}</p>
                        <AnchorLink to="/product#paperwork" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></AnchorLink>

                    </Col>
                    <Col md={4} className={col}>
                        <StaticImage
                            src="../images/booking-blue.png"
                            className="img-fluid mr-auto"
                            alt="icon"
                            width={100}
                            imgStyle={{ objectFit: "contain" }}
                        />
                        <h3 className={featureTitle}>{rightTitle}</h3>
                        <p className={paragraph}>{rightPar}</p>
                        <AnchorLink to="/product#booking" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></AnchorLink>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default FeaturesRow