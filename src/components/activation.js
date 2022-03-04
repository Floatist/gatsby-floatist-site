import * as React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import { section, activationTitle, activationButton, whiteOval } from './activation.module.css'

const Activation = () => {

    const titleStyle = {
        fontFamily: 'Helvetica Neue',
        fontSize: '55px',
        fontWeight: '700'
    }

    return (
        <>
        
        <div className={section}>
        <div className={whiteOval}></div>
            <Container>
                <h1 className={activationTitle} style={titleStyle}>Ready to simplify your operation?</h1>
                <SecondaryButton className={activationButton}>
                    <Link to="/contact">REQUEST A DEMO</Link>
                </SecondaryButton>
            </Container>
        </div>
        </>
        
    )
}

export default Activation