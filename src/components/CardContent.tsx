import {CardText, CardTitle, CardButton, Wrapper} from "./CardText";
import { ReactComponent as Image } from "../image/Rectangle 1.svg"
import { CardImage } from "./CardImage";


function CardContent (props: any) {


  return (
		<>
			<CardImage>
				<Image />
			</CardImage>
			<Wrapper></Wrapper>
			<CardTitle>
				Headline
			</CardTitle>
			<CardText>
				Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
				ornare in venen.
			</CardText>
			<CardButton>See more</CardButton>
			<CardButton>Save</CardButton>
		</>
	)
}

export default CardContent;