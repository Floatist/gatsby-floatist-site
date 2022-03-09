import * as React from 'react'
import { Link } from 'gatsby'
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
                            src="../images/reporting.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        />
                        <h3 className={featureTitle}>{leftTitle}</h3>
                        <p className={paragraph}>{leftPar}</p>
                        <Link to="/product" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></Link>

                    </Col>
                    <Col md={4} className={col}>
                        <StaticImage
                            src="../images/booking.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        />
                        <h3 className={featureTitle}>{middleTitle}</h3>
                        <p className={paragraph}>{middlePar}</p>
                        <Link to="/product" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></Link>

                    </Col>
                    <Col md={4} className={col}>
                        <StaticImage
                            src="../images/booking2.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        />
                        <h3 className={featureTitle}>{rightTitle}</h3>
                        <p className={paragraph}>{rightPar}</p>
                        <Link to="/product" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></Link>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default FeaturesRow