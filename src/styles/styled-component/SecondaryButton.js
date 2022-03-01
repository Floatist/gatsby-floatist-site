import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

// Button in rock grey color
const SecondaryButton = styled(Button)`
  background-color: #5A5B67;
  border-color: #5A5B67;
  border-radius: 12px;
  color: white !important;
  &:hover {
      background-color: #343A3F;
      border-color: #343A3F;
      color: white;
  }

  font-family: poppins;
`

export default SecondaryButton