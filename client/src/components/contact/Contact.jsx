import "./Contact.css"
import { MdCall } from "react-icons/md"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter } from "react-icons/hi2"
import ContactMode from "../contactMode/ContactMode"
const Contact = () => {
    return (
        <section className="c-wrapper" id="contact">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="c-left flexColStart">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">We are always ready to help by providing the best services for you. <br /> We believe a good place to live can make your life better.</span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            {/* first mode */}
                            <ContactMode icon={MdCall} text="Call" phoneNumber="0123 456 789" buttonText="Call Now" />
                            {/* second mode */}
                            <ContactMode icon={BsFillChatDotsFill} text="Chat" phoneNumber="0123 456 789" buttonText="Chat Now" />
                        </div>
                        {/* second row */}
                        <div className="flexStart row">
                            {/* third mode */}
                            <ContactMode icon={BsFillChatDotsFill} text="Video Call" phoneNumber="0123 456 789" buttonText="Video Call Now" />
                            {/* fourth mode */}
                            <ContactMode icon={HiChatBubbleBottomCenter} text="Message" phoneNumber="0123 456 789" buttonText="Message Now" />
                        </div>


                    </div>
                </div>
                {/* right side */}
                <div className="c-right flexEnd">
                    <div className="image-container">
                        <img src="./value.png" alt="contact-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact