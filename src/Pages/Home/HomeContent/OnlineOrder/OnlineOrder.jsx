import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./OnlineOrder.css";
import Heading from "../../../../CompoNents/Heading/Heading";
import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OnlineOrder = () => {
    return (
        <div>
            <Heading heading={"---From 11:00am to 10:00pm---"} subHeading={"ORDER ONLINE"}></Heading>

            <Swiper
                slidesPerView={4}
                spaceBetween={24}
                freeMode={false}
                pagination={{
                    clickable: true,
                }}

                modules={[FreeMode, Pagination]}

                className="mySwiper"
            >
                <SwiperSlide className="sliderCard">
                    <img src={slide1} alt="" />
                    <p>Salads</p>

                </SwiperSlide>
                <SwiperSlide className="sliderCard">
                    <img src={slide2} alt="" />
                    <p>Pizza</p>

                </SwiperSlide>
                <SwiperSlide className="sliderCard">
                    <img src={slide3} alt="" />
                    <p>Soup</p>

                </SwiperSlide>
                <SwiperSlide className="sliderCard">
                    <img src={slide4} alt="" />
                    <p>Deserts</p>

                </SwiperSlide>
                <SwiperSlide className="sliderCard">
                    <img src={slide5} alt="" />
                    <p>Salads</p>

                </SwiperSlide>

                <SwiperSlide className="sliderCard">
                    <img src={slide3} alt="" />
                    <p>Soup</p>

                </SwiperSlide>
                <SwiperSlide className="sliderCard">
                    <img src={slide2} alt="" />
                    <p>Pizza</p>

                </SwiperSlide>
                <SwiperSlide className="sliderCard">
                    <img src={slide3} alt="" />
                    <p>Soup</p>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OnlineOrder;
