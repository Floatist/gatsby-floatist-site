import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import PrimaryButton from '../styles/styled-component/PrimaryButton'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { section, contactTitle, contactButton } from './contactForm.module.css'

class ContactForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    }

    handleInputChange = event => {
        console.log(event)
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
            "Email": this.state.email,
            "Phone": `+{this.state.phone}`,
            "Charter company name": this.state.companyName,
            "Charter base city": this.state.city
        }
        const identifier = new_contact.email
        window["add_contact"](identifier, new_contact)
        console.log(new_contact);
        alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
    }

    render() {
        return (
            <Container fluid className={section}>
                <h2 className={contactTitle} >Request a demo</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Stack gap={2}>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Group>
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="Enter value" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Enter value" />
                            </Form.Group>
                        </Stack>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter value" />
                            <Form.Text>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Group>
                                <Form.Label>Company name</Form.Label>
                                <Form.Control type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} placeholder="Enter value" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" value={this.state.city} onChange={this.handleInputChange} placeholder="Enter value" />
                            </Form.Group>
                        </Stack>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <PhoneInput defaultCountry="US" name="phone" placeholder="Enter phone" value={this.state.phone} onChange={(phone) => this.setState({ phone })} />
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

export default ContactForm