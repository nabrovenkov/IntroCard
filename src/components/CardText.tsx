import styled from 'styled-components'

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

export const CardButton = styled.button`
	background-color: #4e71fe;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: none;
  color: white;
  &:last-child{
    margin-left: 12px;
  } 
    
  `

export const CardButtonSave = styled(CardButton)`
  background-color: white;
  color: #4e71fe;
  border-color: #4e71fe;
  border-width: 2px;
  border-style: solid;
`

export const Wrapper = styled.div`
  font-family: "Inter";
  padding: 20px 10px 22px 10px;
  
`