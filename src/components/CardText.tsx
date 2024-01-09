import styled, { css } from 'styled-components'

type CardTextPropsType = {
	textType?: 'text' | 'title'
}

export const CardText = styled.div<CardTextPropsType>`
	padding-bottom: 20px;

	${props =>
		props.textType === 'title' &&
		css<CardTextPropsType>`
			font-size: 16px;
			font-weight: 700;
			color: black;
		`}

	${props =>
		props.textType === 'text' &&
		css<CardTextPropsType>`
			font-size: 12px;
			font-weight: 500;
			color: #abb3ba;
			line-height: 20px;
		`}
`


export const Wrapper = styled.div`
  font-family: "Inter";
  padding: 20px 10px 22px 10px;
  
`