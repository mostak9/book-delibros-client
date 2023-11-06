import Heading from "./Heading";
import career from "../assets/categories/career.png";
import novel from "../assets/categories/novel.png";
import technology from "../assets/categories/thechnoloy.png";
import astronomy from "../assets/categories/astrology.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mt-10">
      <Heading title="Browse By Category" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="pt-5 relative h-44">
            <img
              className="rounded-t-lg w-3/4 mx-auto h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
              src={novel}
              alt=""
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tigh w-full backdrop-brightness-50 hover:backdrop-brightness-75 duration-500 text-center py-5 absolute -bottom-3 text-white">
              Novels
            </h5>
          </div>
          <div className="p-5">
            <Link className="btn btn-wide bg-primary-color text-white hover:text-primary-color">
              Browse
            </Link>
          </div>
        </div>
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="pt-5 relative h-44">
            <img
              className="rounded-t-lg w-3/4 mx-auto h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
              src={career}
              alt=""
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tigh w-full backdrop-brightness-50 hover:backdrop-brightness-75 duration-500 text-center py-5 absolute -bottom-3 text-white">
              Career
            </h5>
          </div>
          <div className="p-5">
            <Link className="btn btn-wide bg-primary-color text-white hover:text-primary-color">
              Browse
            </Link>
          </div>
        </div>
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="pt-5 relative h-44">
            <img
              className="rounded-t-lg w-3/4 mx-auto h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
              src={technology}
              alt=""
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tigh w-full backdrop-brightness-50 hover:backdrop-brightness-75 duration-500 text-center py-5 absolute -bottom-3 text-white">
              Technology
            </h5>
          </div>
          <div className="p-5">
            <Link className="btn btn-wide bg-primary-color text-white hover:text-primary-color">
              Browse
            </Link>
          </div>
        </div>
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="pt-5 relative h-44">
            <img
              className="rounded-t-lg w-3/4 mx-auto h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
              src={astronomy}
              alt=""
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tigh w-full backdrop-brightness-50 hover:backdrop-brightness-75 duration-500 text-center py-5 absolute -bottom-3 text-white">
              Astronomy
            </h5>
          </div>
          <div className="p-5">
            <Link className="btn btn-wide bg-primary-color text-white hover:text-primary-color">
              Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
