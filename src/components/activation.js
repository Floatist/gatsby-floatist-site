import * as React from 'react'
import { Button, Container } from 'react-bootstrap'
import { section, activationTitle, activationButton } from './activation.module.css'

const Activation = () => {

    return (
        <div className={section}>
            <Container>
                <h1 className={activationTitle}>Let's do this</h1>
                <Button className={activationButton} size="lg">Contact us</Button>
            </Container>
        </div>
    )
}

export default Activation