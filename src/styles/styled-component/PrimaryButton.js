import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const PrimaryButton = styled(Button)`
  background-color: #0097BE;
  border-color: #0097BE;
  border-radius: 5px;
  color: white !important;
  &:hover {
      background-color: #01579B;
      border-color: #01579B;
      color: white;
  }
  a {
    text-decoration: none;
  }

  font-family: poppins;
`

export default PrimaryButton