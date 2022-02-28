import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { section, contactTitle, input, contactButton } from './contactForm.module.css'
import styled from 'styled-components'

class ContactForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: ""
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const new_contact = {
            "First name": this.state.firstName,
            "Last name": this.state.lastName,
            "Email": this.state.email
        }
        const identifier = new_contact.email
        window["add_contact"](identifier, new_contact)
        alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
    }

    render() {
        return (
            <Container fluid className={section}>
                <h1 className={contactTitle}>Request a demo</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First name</Form.Label>
                                <Form.Control className={input} type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="Enter value" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control className={input} type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Enter value" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter value" />
                        <Form.Text>We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <StyledButton type="submit" size="lg" className={contactButton}>
                            Submit
                        </StyledButton>
                    </div>
                </Form>
            </Container>

        )
    }
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

export default ContactForm