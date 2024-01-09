import React, { useEffect } from 'react' 
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inter';
}
`
const CardText = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: 'inter';
  /* text-view: ${props => props.title} */

`

export default CardText