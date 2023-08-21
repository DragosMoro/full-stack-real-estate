import { useState } from "react";
import "./Residencies.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import 'swiper/css';
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../propertyCard/PropertyCard";


const Residencies = () => {
    return (
        <section className="r-wrapper" id="residencies">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <h3 className="orangeText">
                        Best Choices
                    </h3>
                    <h1 className="primaryText">
                        Popular Residencies
                    </h1>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <PropertyCard card = {card}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies;

const SliderButtons = () => {
    const [isClicked, setIsClicked] = useState(0);
    const swiper = useSwiper();

    const handleButtonClickNext = () => {
        setIsClicked(1);
        swiper.slideNext();
    };

    const handleButtonClickPrev = () => {
        setIsClicked(2);
        swiper.slidePrev();
    };

    return (
        <div className="flexCenter r-buttons ">
            <button id="1" onClick={handleButtonClickPrev} className={`${isClicked===2 && 'clicked'}`}>&lt;</button>
            <button id="2" onClick={handleButtonClickNext} className={`${isClicked===1 && 'clicked'}`}>&gt;</button>
        </div>
    );
};
