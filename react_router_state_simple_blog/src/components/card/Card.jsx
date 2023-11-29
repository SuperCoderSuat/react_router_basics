import { Link } from "react-router-dom";
import Button from "../button/Button";

const Card = ({imgUrl, text, btnText, link}) => {
    return (
        <>
            <div>
                <img src={imgUrl} alt="" />
                <p>{text}</p>
                <Link to={link}>{btnText}</Link>
            </div>
        </>
    );
}

export default Card;