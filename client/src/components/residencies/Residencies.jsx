import { useState } from "react";
import "./Residencies.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import 'swiper/css';
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../propertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { SyncLoader } from "react-spinners";


const Residencies = () => {

    const { data, isError, isLoading} = useProperties();
    if(isError)
    {
        return(
            <div className="wrapper">
                <span>
                    Error while fetching data
                </span>

            </div>
        )
    }
    if(isLoading)
    {
        return(
            <div className="wrapper flexCenter" style={{height:"60vh"}}>
                <SyncLoader height="80" width ="80" radius={1} color="#4066ff" aria-label="sync-loading"/>
            </div>
        )

    }
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
                        data.slice(0,10).map((card, i) => (
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
