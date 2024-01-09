import CardText from "./CardText";
import { ReactComponent as Image } from "../image/Rectangle 1.svg"
import { CardImage } from "./CardImage";


function CardContent (props: any) {


  return (
		<>
			<CardImage>
				<Image />
			</CardImage>
			<CardText text-view={"title"}>
				<h1>Headline</h1>
        
      </CardText>
			<CardText>
				"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
				ornare in venen."
			</CardText>
		</>
	)
}

export default CardContent;