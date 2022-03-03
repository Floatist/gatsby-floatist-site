import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

// Button in rock grey color
const SecondaryButtonOutline = styled(Button)`
  text-color: #5A5B67;
  background-color: transparent;
  border-color: #5A5B67;
  border-radius: 5px;
  &:hover {
    background-color: #5A5B67;
    border-color: #5A5B67;
    color: white !important;
  }
  &:hover a {
    color: white !important;
  }
  a {
    text-decoration: none;
    color: #5A5B67;
    &:hover {
      color: white;
    }
  }
  font-family: poppins;
`

export default SecondaryButtonOutline