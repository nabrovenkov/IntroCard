import styled, { css } from 'styled-components';
import { CardButtonPropsType } from '../components/CardText';


export const CardButton = styled.button<CardButtonPropsType> `
	width: 86px;
	height: 30px;
	border-radius: 5px;
  
	${props => props.primary && css<CardButtonPropsType> `
	border-style: none;
  background-color: #4e71fe;   
  color: white; 
  `}

	${props => props.secondary &&
    css<CardButtonPropsType> `
			background-color: white;
			color: #4e71fe;
			border-color: #4e71fe;
			border-width: 2px;
			border-style: solid;
  `}

  &:last-child {
    margin-left: 12px;
  }
`;
