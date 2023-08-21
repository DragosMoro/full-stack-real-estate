import PropTypes from "prop-types";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
const PropertyCard = ({ card }) => {
    return (
        <div className="flexColStart r-card">
            <AiFillHeart size={24} color="white"/>
            <img src={card.image} alt="residency-image" />
            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
            </span>
            <span className="primaryText">
                {card.name}
            </span>
            <span className="secondaryText">
                {card.detail}
            </span>
        </div>
    )
}

PropertyCard.propTypes = {
    card: PropTypes.shape({
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
    }).isRequired,
};

export default PropertyCard