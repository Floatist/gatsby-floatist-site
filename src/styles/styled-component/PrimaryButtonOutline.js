import styled from "styled-components"
import Button from "react-bootstrap/Button"

const PrimaryButtonOutline = styled(Button)`
  text-color: #0097BE;
  background-color: transparent;
  border-color: #0097BE;
  border-radius: 12px;
  &:hover {
      background-color: #0097BE;
      border-color: #0097BE;
      color: white !important;
  }
  &:hover a {
    color: white !important;
  }
  a {
    color: #0097BE;
    &:hover {
        color: white;
    }
}
  font-family: poppins;
  font-size: 20px;
`

export default PrimaryButtonOutline