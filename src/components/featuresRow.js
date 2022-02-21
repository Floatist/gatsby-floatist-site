import * as React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { featuresRow } from './featuresRow.module.css'

const FeaturesRow = () => {

    return (
        <div className={featuresRow} >
            <Row className="text-center">
                <Col sm={4}>
                    <h5>First feature</h5>
                    <p>I am a feature</p>
                </Col>
                <Col sm={4}>
                    <h5>Second feature</h5>
                    <p>I am a feature</p>
                </Col>
                <Col sm={4}>
                    <h5>Third feature</h5>
                    <p>I am a feature</p>
                </Col>
            </Row>
        </div>
    )
}

export default FeaturesRow