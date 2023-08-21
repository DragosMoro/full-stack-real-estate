import "./ContactMode.css"
import PropTypes from "prop-types";
const ContactMode = ({ icon: IconComponent, text, phoneNumber, buttonText }) => {
    return (
        <div className="flexColCenter mode">
            <div className="flexStart">
                <div className="flexCenter icon">
                    <IconComponent size={25} />
                </div>
                <div className="flexColStart detail">
                    <span className="primaryText">{text}</span>
                    <span className="secondaryText">{phoneNumber}</span>
                </div>
            </div>
            <div className="flexCenter button">
                {buttonText}
            </div>
        </div>
    )
}

ContactMode.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,

};

export default ContactMode;