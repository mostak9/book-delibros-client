import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
import Book from "../assets/baaner/book.jpg";
import Bg1 from "../assets/baaner/bg_1.jpg";
import Bg2 from "../assets/baaner/bg_2.jpg";
import Bg3 from "../assets/baaner/bg_3.jpg";

import { Navigation, Autoplay, EffectCreative } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        navigation={true}
        loop={true}
        speed={1000}
        modules={[Navigation, Autoplay, EffectCreative]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className="mySwiper min-h-[80vh]"
      >
        <SwiperSlide style={{ backgroundImage: `url(${Bg1})` }} className="">
          <div className=" h-[80vh]  flex items-center justify-center w-full  bg-base-300/90">
            <div className="flex items-center justify-center  gap-10  flex-col-reverse lg:flex-row ">
              <div className="hidden md:block">
                <img
                  src={Book}
                  className="shadow-neutral-800 drop-shadow-2xl "
                />
              </div>
              <div className="max-w-2xl px-10 lg:px-0">
                <h3 className="text-2xl text-primary-color font-bold italic">
                  Publishing House
                </h3>
                <h1 className="text-5xl font-bold">
                  The New Arrival <br />
                  from Matthew Perry
                </h1>
                <p className="py-6">
                  Friends, Lovers and the Big Terrible Things
                </p>
                <button className="btn bg-primary-color hover:text-primary-color dark:text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[80vh]"
            style={{
              backgroundImage: `url(${Bg3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content">
              <div className="max-w-xl">
                <section className="min-h-[80vh] flex items-center justify-center py-12">
                  <div className="">
                    <h2 className="text-3xl dark:text-white font-bold mb-8">
                      Upcoming Events and Workshops
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 dark:text-black">
                      <div className="event bg-gradient-to-r from-[#7F7FD5] to-[#86A8E7] p-6 rounded-lg shadow-md">
                        <div className="event-details mb-4">
                          <h3 className="text-xl font-bold mb-2">
                            Book Club Meeting
                          </h3>
                          <p className=" mb-1"><span className="font-semibold">Date:</span> November 15, 2023</p>
                          <p className=" mb-1"><span className="font-semibold">Time:</span> 5:00 PM - 7:00 PM</p>
                          <p className="">
                            <span className="font-semibold">Location:</span> Main Library Meeting Room
                          </p>
                        </div>
                      </div>

                      <div className="event bg-gradient-to-r from-[#FF6F61] to-[#A0515F] bg-base-200 p-6 rounded-lg shadow-md">
                        <div className="event-details mb-4">
                          <h3 className="text-xl font-bold mb-2">
                            Author Q&A Session
                          </h3>
                          <p className=" mb-1"><span className="font-semibold">Date:</span> November 20, 2023</p>
                          <p className=" mb-1"><span className="font-semibold">Time:</span> 6:30 PM - 8:30 PM</p>
                          <p className="">
                            <span className="font-semibold">Location:</span> Community Center Auditorium
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className="flex items-center justify-center h-[80vh] w-full bg-center bg-cover "
            style={{ backgroundImage: `url(${Bg2})` }}
          >
            <div className="bg-gradient-to-r from-gray-800 to-transparent w-full h-full text-white flex items-center justify-start">
              <div className="px-6 md:px-16">
                <h1 className="text-5xl font-bold">
                  Enjoy ebooks <br />
                  and audiobooks for free
                </h1>
                <p className="mt-5">
                  Ebooks, audiobooks, magazines and more are available for free{" "}
                  <br /> through your local library or school
                </p>
                <button className="mt-6 btn btn-outline border-2 border-primary-color text-primary-color">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Banner;
