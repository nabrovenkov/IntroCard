import styled, { css } from 'styled-components'

type CardTextPropsType = {
  textStyle?: "title" | "text"
}

export const CardText = styled.div`
  font-weight: 500;
  color: #ABB3BA;
  line-height: 20px;
  font-size: 12px;
  padding-bottom: 20px;
  
  ${props => props.textStyle === "title" && css<CardTextPropsType> `
    font-size: 16px;
    font-weight: 700;
    color: black;
    
  `}
`


export const Wrapper = styled.div`
  font-family: "Inter";
  padding: 20px 10px 22px 10px;
  
`