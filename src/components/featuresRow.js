import * as React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from 'gatsby-plugin-image'
import { section, row, column, featureTitle, featureLink } from './featuresRow.module.css'
import { Container } from 'react-bootstrap'

const FeaturesRow = () => {

    return (
        <div className={section}>
            <Container>
                <Row className={row}>
                    <Col sm={4} className={column}>
                        <StaticImage
                            src="../images/booking.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        />
                        <h3 className={featureTitle}>Booking management</h3>
                        <p>Directly push your availability to leading aggregators such as Nausys, MMK and Yacht Sentinel. No need to duplicate you data input in several different providers.</p>
                        <Link to="/product" className={featureLink}>Learn more</Link>

                    </Col>
                    <Col sm={4} className={column}>
                        <StaticImage
                            src="../images/reporting.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        />
                        <h3 className={featureTitle}>Reporting</h3>
                        <p>Run and download reports to share with any stakeholders. Provide a login to boat owners and empower them to keep track of their boats record.</p>
                        <Link to="/product" className={featureLink}>Learn more</Link>

                    </Col>
                    <Col sm={4} className={column}>
                        <StaticImage
                            src="../images/hiring.png"
                            className="img-fluid"
                            alt="icon"
                            width={100}
                        />
                        <h3 className={featureTitle}>Find top notch crew</h3>
                        <p>Use our crew portal to invite captains and chefs for your charters. Choose from our extensive network of the highest rated certified crew. Finding, assigning and paying crew has never been easier.</p>
                        <Link to="/product" className={featureLink}>Learn more</Link>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default FeaturesRow