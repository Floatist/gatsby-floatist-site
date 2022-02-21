import * as React from 'react'
import { Button } from 'react-bootstrap'
import { activation, activationButton } from './activation.module.css'
import { title } from './layout.module.css'

const Activation = () => {

    return (
        <div className={activation}>
            <h1 className={title} >Let's do this</h1>
            <Button className={activationButton} variant="secondary btn-lg">Contact us</Button>
        </div>
    )
}

export default Activation