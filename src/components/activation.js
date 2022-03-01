import * as React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import { section, activationTitle, activationButton } from './activation.module.css'

const Activation = () => {

    return (
        <div className={section}>
            <Container>
                <h1 className={activationTitle}>Ready to simplify your operation?</h1>
                <SecondaryButton className={activationButton} size="lg">
                    <Link to="/contact">Request a demo</Link>
                </SecondaryButton>
            </Container>
        </div>
    )
}

export default Activation