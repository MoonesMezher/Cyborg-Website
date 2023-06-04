import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
import Img1 from '../../assets/images/featured-01.jpg'
import Img2 from '../../assets/images/featured-02.jpg'
import Img3 from '../../assets/images/featured-03.jpg'
import Items from '../../components/browse/landing/featured/Items';
// import required modules
import { Autoplay,Navigation, Mousewheel, Keyboard } from "swiper";
import { Component } from "react";

class Swipper extends Component{
    constructor() {
        super();
        this.state = { matches1: window.matchMedia("(min-width: 576px) and (max-width: 768px)").matches,
                    matches2: window.matchMedia("(max-width: 575px)").matches 
        };
        this.items = {
            imgs: [Img1,Img2,Img3],
            titles: ["CS-GO","Isalnd Rusty","Gamezer"],
            downloads: ["254k","270k","308K"],
            downloadsBtns: [4.2,4.4,4.8],
            stars: [4.1,4.5,4.5]
        }
    }
    componentDidMount() {
        const handler1 = e => this.setState({matches1: e.matches});
        const handler2 = e => this.setState({matches2: e.matches});
        window.matchMedia("(min-width: 576px) and (max-width: 768px)").addEventListener('change', handler1);
        window.matchMedia("(max-width: 575px)").addEventListener('change', handler2);
    }
    generateItem(i) {
        return <Items img={this.items.imgs[i]} title={this.items.titles[i]} downloads={this.items.downloads[i]} downloadsBtn={this.items.downloadsBtns[i]} stars={this.items.stars[i]}/>
    }
    render() {
        return (
            <>
            <Swiper
                cssMode={true}
                slidesPerView={this.state.matches2?1:(this.state.matches1?2:3)}
                spaceBetween={this.state.matches2?10:(this.state.matches1?20:30)}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper mt-4"
            >
                <SwiperSlide>{this.generateItem(0)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(1)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(2)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(0)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(1)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(2)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(0)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(1)}</SwiperSlide>
                <SwiperSlide>{this.generateItem(2)}</SwiperSlide>
            </Swiper>
            </>
        );
    }
}

export default Swipper;
