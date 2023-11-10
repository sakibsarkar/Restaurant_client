import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import banner1 from "../../../../../assets/home/01.jpg";
import banner2 from "../../../../../assets/home/02.jpg";
import banner3 from "../../../../../assets/home/03.png";
import banner4 from "../../../../../assets/home/04.jpg";
import banner5 from "../../../../../assets/home/05.png";
import banner6 from "../../../../../assets/home/06.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} interval={2500} infiniteLoop={true} emulateTouch={true}>
                <div>
                    <img className="sliderImg" src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="sliderImg" src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="sliderImg" src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className="sliderImg" src={banner4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className="sliderImg" src={banner5} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className="sliderImg" src={banner6} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;