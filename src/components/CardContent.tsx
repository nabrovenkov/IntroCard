import React from "react";
import {CardText, Wrapper} from "./CardText";
import { CardButton } from '../styles/CardButton.styled';
import { ReactComponent as Image } from "../image/Rectangle 1.svg";
import { CardImage } from "./CardImage";
import styled from "styled-components";


function CardContent () {


  return (
		<>
			<CardImage>
				<Image />
			</CardImage>
			<Wrapper>
				<CardText textType={'title'}>Headline</CardText>
				<CardText textType={'text'}>
					Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
					ornare in venen.
				</CardText>
				<CardButton primary>See more</CardButton>
				<CardButton secondary>Save</CardButton>
			</Wrapper>
		</>
	)
}

export default CardContent;