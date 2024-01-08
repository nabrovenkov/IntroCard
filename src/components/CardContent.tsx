import CardText from "./CardText";
import { ReactComponent as Image } from "../image/Rectangle 1.svg"
import { CardImage } from "./CardImage";


function CardContent (props: any) {


  return (
		<>
			<CardImage>
				<Image />
			</CardImage>
			<CardText TextView={"title"}>
        "Headline"
      </CardText>
			<CardText TextView={"text"}>
				"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
				ornare in venen."
			</CardText>
		</>
	)
}

export default CardContent;