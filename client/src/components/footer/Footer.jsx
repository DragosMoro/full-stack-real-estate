import "./Footer.css"

const Footer = () => {
    return (
        <section className="f-wrapper" id="footer">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="f-left flexColStart">
                    <img src="./logo2.png" alt="logo" />
                    <span className="secondaryText">
                        Our vision is to create <br />
                        the best living environment for all people.
                    </span>
                </div>
                <div className="f-right">
                    <h1 className="primaryText">
                        Information
                    </h1>
                    <span className="secondaryText">
                        145 New York, FL 5467, USA
                    </span>
                    <div className="flexCenter f-links">
                        <span>
                            Property
                        </span>
                        <span>
                            Services
                        </span>
                        <span>
                            Product
                        </span>
                        <span>
                            About Us
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer