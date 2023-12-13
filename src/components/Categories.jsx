import Heading from "./Heading";
import career from "../assets/categories/career.svg";
import technology from "../assets/categories/technology.svg";
import astronomy from "../assets/categories/astronomy.svg";
import novel from "../assets/categories/book.svg";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10">
      <Heading title="Browse By Category" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-5 md:mx-0">
        <Card className=" shadow-lg border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
          <CardBody>
            <div className="mb-6">
              <img src={novel} className="w-1/2 mx-auto" alt="" />
            </div>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Novels
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={"/categorizedBooks/novel"}>
              <Button
                variant="text"
                size="lg"
                className=" text-primary-color flex items-center gap-1"
              >
                Browse <FaArrowRightLong className="text-2xl" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className=" shadow-lg border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
          <CardBody>
            <div className="mb-6">
              <img src={career} className="w-1/2 mx-auto" alt="" />
            </div>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Career
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={"/categorizedBooks/career"}>
              <Button
                variant="text"
                size="lg"
                className=" text-primary-color flex items-center gap-1"
              >
                Browse <FaArrowRightLong className="text-2xl" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className=" shadow-lg border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
          <CardBody>
            <div className="mb-6">
              <img src={technology} className="w-1/2 mx-auto" alt="" />
            </div>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Technology
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={"/categorizedBooks/technology"}>
              <Button
                variant="text"
                size="lg"
                className=" text-primary-color flex items-center gap-1"
              >
                Browse <FaArrowRightLong className="text-2xl" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className=" shadow-lg border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
          <CardBody>
            <div className="mb-6">
              <img src={astronomy} className="w-1/2 mx-auto" alt="" />
            </div>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Astronomy
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={"/categorizedBooks/astronomy"}>
              <Button
                variant="text"
                size="lg"
                className=" text-primary-color flex items-center gap-1"
              >
                Browse <FaArrowRightLong className="text-2xl" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Categories;
