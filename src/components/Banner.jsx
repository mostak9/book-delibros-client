import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
import Book from "../assets/baaner/book.jpg";
import Bg1 from "../assets/baaner/bg_1.jpg";
import Bg2 from "../assets/baaner/bg_2.jpg";

import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper min-h-[80vh]">
        <SwiperSlide style={{ backgroundImage: `url(${Bg1})` }} className="">
          <div className=" h-[80vh]  flex items-center justify-center w-full  bg-base-300/90">
            <div className="flex items-center justify-center  gap-10  flex-col-reverse lg:flex-row ">
              <div className="hidden md:block">
                <img src={Book} className="shadow-neutral-800 drop-shadow-2xl " />
              </div>
              <div className="max-w-2xl px-10 lg:px-0">
                <h3 className="text-2xl text-primary-color font-bold italic">Publishing House</h3>
                <h1 className="text-5xl font-bold">The New Arrival <br />from Matthew Perry</h1>
                <p className="py-6">
                Friends, Lovers and the Big Terrible Things
                </p>
                <button className="btn bg-primary-color hover:text-primary-color dark:text-white">Read More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="">
          <div className="flex items-center justify-center h-[80vh] w-full bg-center bg-cover " style={{ backgroundImage: `url(${Bg2})` }}>
            <div className="bg-gradient-to-r from-gray-800 to-transparent w-full h-full text-white flex items-center justify-start" >
              <div className="px-6 md:px-16">
              <h1 className="text-5xl font-bold">Enjoy ebooks <br />and audiobooks for free</h1>
              <p className="mt-5">Ebooks, audiobooks, magazines and more are available for free <br /> through your local library or school</p>
              <button className="mt-6 btn btn-outline border-2 border-primary-color text-primary-color">Explore</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
