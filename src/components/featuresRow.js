import * as React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GatsbyImage } from 'gatsby-plugin-image'
import { container, section, row, column, featureTitle, paragraph, featureLink } from './featuresRow.module.css'
import { Container } from 'react-bootstrap'

const FeaturesRow = ({ leftTitle, leftPar, middleTitle, middlePar, rightTitle, rightPar, leftImage, middleImage, rightImage}) => {

    return (
        <div className={section}>
            <Container fluid className={container}>
                <Row className={row}>
                    <Col sm={4} className={column}>
                        {/* <StaticImage
                            src="../images/booking.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        /> */}
                        <GatsbyImage image={leftImage} />
                        <h3 className={featureTitle}>{leftTitle}</h3>
                        <p className={paragraph}>{leftPar}</p>
                        <Link to="/product" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></Link>

                    </Col>
                    <Col sm={4} className={column}>
                        {/* <StaticImage
                            src="../images/reporting.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        /> */}
                        <GatsbyImage image={middleImage} />
                        <h3 className={featureTitle}>{middleTitle}</h3>
                        <p className={paragraph}>{middlePar}</p>
                        <Link to="/product" className={featureLink}>Learn more  <i className="fa-solid fa-arrow-right"></i></Link>

                    </Col>
                    <Col sm={4} className={column}>
                        {/* <StaticImage
                            src="../images/hiring.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        /> */}
                        <GatsbyImage image={rightImage}/>
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