import * as React from 'react'
import { Link } from 'gatsby'
import { Button, Container } from 'react-bootstrap'
import { section, activationTitle, activationButton } from './activation.module.css'
import styled from 'styled-components'

const Activation = () => {

    return (
        <div className={section}>
            <Container>
                <h1 className={activationTitle}>Let's do this</h1>
                <StyledButton className={activationButton} size="lg">
                    <Link to="/contact">Contact us</Link>
                </StyledButton>
            </Container>
        </div>
    )
}

const StyledButton = styled(Button)`
  background-color: #5A5B67;
  border-color: #5A5B67;
  border-radius: 12px;
  color: white !important;
  &:hover {
      background-color: #343A3F;
      border-color: #343A3F;
      color: white;
  }
`

export default Activation