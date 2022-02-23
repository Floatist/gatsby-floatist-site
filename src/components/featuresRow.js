import * as React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from 'gatsby-plugin-image'
import { featuresRow, featureTitle } from './featuresRow.module.css'

const FeaturesRow = () => {

    return (
        <div className={featuresRow} >
            <Row className="text-center">
                <Col sm={4}>
                    <StaticImage
                        src="../images/random.png"
                        className="img-fluid"
                        alt="icon"
                        width={100}
                    />
                    <h5 className={featureTitle}>Booking management</h5>
                    <p>Directly push your availability to leading aggregators such as Nausys, MMK and Yacht Sentinel. No need to duplicate you data input in several different providers.</p>
                </Col>
                <Col sm={4}>
                    <StaticImage
                        src="../images/random.png"
                        className="img-fluid"
                        alt="icon"
                        width={100}
                    />
                    <h5 className={featureTitle}>Reporting</h5>
                    <p>Run and download reports to share with any stakeholders. Provide a login to boat owners and empower them to keep track of their boats record.</p>
                </Col>
                <Col sm={4}>
                    <StaticImage
                        src="../images/random.png"
                        className="img-fluid"
                        alt="icon"
                        width={100}
                    />
                    <h5 className={featureTitle}>Find and hire top notch crew</h5>
                    <p>Use our crew portal to invite captains and chefs for your charters. Choose from our extensive network of the highest rated certified crew. Finding, assigning and paying crew has never been easier!</p>
                </Col>
            </Row>
        </div>
    )
}

export default FeaturesRow