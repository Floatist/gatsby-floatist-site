import * as React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import SecondaryButton from '../styles/styled-component/SecondaryButton'
import { section, activationTitle, activationButton, whiteOval } from './activation.module.css'

const Activation = ({ title, buttonText }) => {

    const titleStyle = {
        fontFamily: 'Helvetica Neue',
        fontSize: '55px',
        fontWeight: '700'
    }

    const renderButton = () => { 
        if (buttonText) {
            return (
                <SecondaryButton className={activationButton}>
                        <Link to="/contact">{buttonText}</Link>
                </SecondaryButton>
            )
        } else {
            return ''
        }
    }

    return (
        <>
            <div className={section}>
                <div className={whiteOval}></div>
                <Container>
                    <h1 className={activationTitle} style={titleStyle}>{title}</h1>
                    {/* <SecondaryButton className={activationButton}>
                        <Link to="/contact">{buttonText}</Link>
                    </SecondaryButton> */}
                    {renderButton()}
                </Container>
            </div>
        </>

    )
}

export default Activation