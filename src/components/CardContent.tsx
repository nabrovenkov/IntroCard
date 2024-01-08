import CardText from "./CardText";
import { ReactComponent as Image } from "../image/Rectangle 1.svg"
import { CardImage } from "./CardImage";


function CardContent (props: any) {


  return(
    <>
      <CardImage>
        <Image />
      </CardImage>
    </>
  )
}

export default CardContent;