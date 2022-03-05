import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import PrimaryButton from '../styles/styled-component/PrimaryButton'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { section, form, contactButton, confirmation, xmark, submissionParagraph, submissionTitle } from './contactForm.module.css'

class ContactForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        formSubmitted: false,
        closeConfirmation: false,
        validated: false,
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
        const form = event.currentTarget;
        // Form validation
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            this.setState({ validated: true })
            return
        }
    
        // If form is valid, continue
        event.preventDefault()

        // Create new contact for CRM
        const new_contact = {
            "First name": this.state.firstName,
            "Last name": this.state.lastName,
            "Email": this.state.email,
            "Mobile": `+${this.state.phone}`,
            "Charter company name": this.state.companyName,
            "Charter base city": this.state.city
        }
        const identifier = new_contact.email

        // This calls the javascript function defined in /static/freshsales.js
        window["add_contact"](identifier, new_contact)
        this.setState({ formSubmitted: true })
    }

    handleClick = () => {
        this.setState({ closeConfirmation: true})
    }

    render() {
        if (this.state.formSubmitted && !this.state.closeConfirmation) {
            return (
                <Container fluid className={section}>
                    <div className={xmark} onClick={() => this.handleClick()}>
                        <i className="fa-solid fa-xmark  fa-lg" style={{ color: "grey"}}></i>
                    </div>
                    <div className={confirmation}>
                        <h3 className={submissionTitle}><i className="fa-solid fa-circle-check" style={{ color: "#65C18C"}}></i> Thanks! We've received your request.</h3>
                        <p className={submissionParagraph}>We will be in touch with you shortly.</p>
                    </div>
                </Container>
            )
        } else if (this.state.formSubmitted && this.state.closeConfirmation) {
            return ''
        } else if (!this.state.formSubmitted) {
            return (
                <Container fluid className={section}>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} className={form}>
                        <Stack gap={3}>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Group>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="Enter value" />
                                    <Form.Control.Feedback type="invalid">Please enter value</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Enter value" />
                                    <Form.Control.Feedback type="invalid">Please enter value</Form.Control.Feedback>
                                </Form.Group>
                            </Stack>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter value" />
                                <Form.Control.Feedback type="invalid">Please provide an email</Form.Control.Feedback>
                                <Form.Text>We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Group>
                                    <Form.Label>Company name</Form.Label>
                                    <Form.Control required type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} placeholder="Enter value" />
                                    <Form.Control.Feedback type="invalid">Please enter value</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required type="text" name="city" value={this.state.city} onChange={this.handleInputChange} placeholder="Enter value" />
                                    <Form.Control.Feedback type="invalid">Please enter value</Form.Control.Feedback>
                                </Form.Group>
                            </Stack>
                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <PhoneInput required defaultCountry="US" name="phone" placeholder="Enter phone" value={this.state.phone} onChange={(phone) => this.setState({ phone })} />
                                <Form.Control.Feedback type="invalid">Please enter phone</Form.Control.Feedback>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <PrimaryButton type="submit" size="lg" className={contactButton}>
                                    Contact me
                                </PrimaryButton>
                            </div>
                        </Stack>
                    </Form>
                </Container>
            )
        }
    }
}

export default ContactForm