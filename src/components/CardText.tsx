import styled from 'styled-components'

type:
export const CardText = styled.div`
  font-weight: 500;
  color: #ABB3BA;
  line-height: 20px;
  font-size: 12px;
  padding-bottom: 20px;
  `
export const CardTitle = styled(CardText)`
  font-size: 16px;
  font-weight: 700;
  color: black;
  
  `

export type CardButtonPropsType = {
  primary?: boolean
  secondary?: boolean
}

export const Wrapper = styled.div`
  font-family: "Inter";
  padding: 20px 10px 22px 10px;
  
`