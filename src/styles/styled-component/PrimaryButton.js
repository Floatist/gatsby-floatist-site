import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const PrimaryButton = styled(Button)`
  background-color: #0097BE;
  border-color: #0097BE;
  border-radius: 12px;
  color: white !important;
  &:hover {
      background-color: #01579B;
      border-color: #01579B;
      color: white;
  }

  font-family: poppins;
  font-size: 20px;
`

export default PrimaryButton