import HeadBanner from "../components/HeadBanner";
import Heading from "../components/Heading";
import AllBooksCard from "../components/AllBooksCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllBooks = () => {
  const [filter, setFilter] = useState(false);
  const { user } = useContext(AuthContext);

  const { data: loadedBooks, isLoading } = useQuery({
    queryKey: ["AllBooks"],
    queryFn: async () => {
      const res = await axios.get(
        `https://libraria-server-assignment-11.vercel.app/api/v1/allBooks?email=${user.email}`,
        { withCredentials: true }
      );
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  // const loadedBooks = useLoaderData();
  const books = filter
    ? loadedBooks?.filter((book) => book?.quantity > 0)
    : loadedBooks;
  const technologies = books?.filter((book) => book.category === "technology");
  const careers = books?.filter((book) => book.category === "career");
  const novels = books?.filter((book) => book.category === "novel");
  const astronomies = books?.filter((book) => book.category === "astronomy");

  return (
    <div>
      <HeadBanner title="All" />

      <div className="container mx-auto">
        <Button
          onClick={() => setFilter(true)}
          disabled={filter}
          className="mt-5"
        >
          {filter ? "Filtered by available books" : "Filter by available books"}
        </Button>
        {/* career */}
        <div>
          <Heading title="Career Category" />
          <div className="">
            <Swiper
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              freeMode
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              className="max-h-max"
            >
              <div>
                {careers?.map((book) => (
                  <SwiperSlide key={book._id}>
                    <AllBooksCard book={book} />
                  </SwiperSlide>
                ))}
              </div>
              <div className="flex items-center gap-5 px-5 mt-5">
                <button className="btn prev text-primary-color">
                  <BsArrowLeft className="text-xl font-bold" />
                </button>
                <button className="btn next text-primary-color">
                  <BsArrowRight className="text-xl font-bold" />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        {/* novels */}
        <div>
          <Heading title="Novels Category" />
          <div className="">
            <Swiper
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              freeMode
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              className="max-h-max"
            >
              <div>
                {novels?.map((book) => (
                  <SwiperSlide key={book._id}>
                    <AllBooksCard book={book} />
                  </SwiperSlide>
                ))}
              </div>
              <div className="flex items-center gap-5 px-5 mt-5">
                <button className="btn prev text-primary-color">
                  <BsArrowLeft className="text-xl font-bold" />
                </button>
                <button className="btn next text-primary-color">
                  <BsArrowRight className="text-xl font-bold" />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        {/* Technology */}
        <div>
          <Heading title="Technology Category" />
          <div className="">
            <Swiper
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              freeMode
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              className="max-h-max"
            >
              <div>
                {technologies?.map((book) => (
                  <SwiperSlide key={book._id}>
                    <AllBooksCard book={book} />
                  </SwiperSlide>
                ))}
              </div>
              <div className="flex items-center gap-5 px-5 mt-5">
                <button className="btn prev text-primary-color">
                  <BsArrowLeft className="text-xl font-bold" />
                </button>
                <button className="btn next text-primary-color">
                  <BsArrowRight className="text-xl font-bold" />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        {/* Astronomy */}
        <div>
          <Heading title="Astronomy Category" />
          <div className="">
            <Swiper
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              freeMode
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              className="max-h-max"
            >
              <div>
                {astronomies?.map((book) => (
                  <SwiperSlide key={book._id}>
                    <AllBooksCard book={book} />
                  </SwiperSlide>
                ))}
              </div>
              <div className="flex items-center gap-5 px-5 mt-5">
                <button className="btn prev text-primary-color">
                  <BsArrowLeft className="text-xl font-bold" />
                </button>
                <button className="btn next text-primary-color">
                  <BsArrowRight className="text-xl font-bold" />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
