import "./GetStarted.css"

const GetStarted = () => {
    return (
        <section className="g-wrapper" id="getStarted">
            <div className="paddings innerWidth g-container">
                <div className="g-content flexColCenter">
                    <h2 className="primaryText">Get started with Homyz</h2>
                    <div className="secondaryText flexColCenter">
                        <span >Subscribe to receive highly attractive price quotes from us.</span>
                        <span>Discover your new residence soon.</span>
                    </div>
                    <button className="button">
                        <a href="mailto:morozan.dragos@gmail.com">Get Started</a>
                        </button>
                </div>

            </div>
        </section>
    )
}

export default GetStarted;