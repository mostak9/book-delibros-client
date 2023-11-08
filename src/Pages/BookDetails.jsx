import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "@smastrom/react-rating/style.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import swal from "sweetalert";

const BookDetails = () => {
  const params = useParams();
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [isBorrow, setIsBorrow] = useState(true);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const res = await axios.get(
        `https://libraria-server-assignment-11.vercel.app/api/v1/allBooks/${params.id}`
      );

      fetch(`https://libraria-server-assignment-11.vercel.app/api/v1/borrowBook?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const book = data.find((book) => book.bookId === params.id);
          if (book) setIsBorrow(false);
        });
      return res.data;
    },
    // refetchOnWindowFocus: true,
  });

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  const {
    author,
    rating,
    imageLink,
    title,
    quantity,
    pages,
    year,
    description,
  } = data;

  const handleSubmit = (event) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const borrowedDate = `${year}-${month}-${day}`;
    console.log(borrowedDate);



    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const returnDate = form.date.value;
    const info = {
      name,
      email,
      returnDate,
      borrowedDate,
      bookId: data._id,
      img: data.imageLink,
      title: data.title,
      author: data.author,
    };
    console.log(info);
    handleOpen();
    axios.post("https://libraria-server-assignment-11.vercel.app/api/v1/borrowBook", info).then((res) => {
      console.log(res.data);
      if (res.data.insertedId && data.quantity) {
        swal("Success!", "You borrowed the book", "success");
        axios
          .patch(`https://libraria-server-assignment-11.vercel.app/api/v1/updateQuantity/${data._id}`, {
            quantity: data.quantity - 1,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      <div className="flex flex-col items-center gap-4">
        <img src={imageLink} className="w-2/3 mx-auto" alt="" />
        <Link
          to={`/readBook/${data._id}`}
          className="btn bg-primary-color btn- btn-wide"
        >
          Read the Book
        </Link>

        <button
          onClick={handleOpen}
          disabled={data.quantity && isBorrow ? false : true}
          className={`btn btn-outline btn-wide text-primary-color border-primary-color  ${
            data.quantity && "disabled"
          }`}
        >
          Borrow The book
        </button>

        <Dialog open={open} size="xs" handler={handleOpen}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              {" "}
              <Typography className="mb-1" variant="h4">
                Borrow the book
              </Typography>
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <form onSubmit={handleSubmit} action="">
            <DialogBody>
              <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                Give required information
              </Typography>
              <div className="grid gap-6">
                <Input
                  type="text"
                  name="name"
                  value={user.displayName}
                  required
                  label="User Name"
                />
                <Input
                  type="email"
                  name="email"
                  value={user.email}
                  required
                  label="Email"
                />
                <Input type="date" name="date" required label="Date" />
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="red" onClick={handleOpen}>
                cancel
              </Button>
              <Button type="submit" variant="gradient" color="blue">
                Borrow
              </Button>
            </DialogFooter>
          </form>
        </Dialog>
      </div>
      <div className="col-span-2 px-4">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl">by {author}</p>
          <div className="flex items-center gap-3 text-xl font-bold">
            <Rating
              style={{ width: "150px" }}
              value={parseFloat(rating)}
              readOnly={true}
            />
            <p>{parseFloat(rating).toFixed(2)}</p>
            <p className="text-sm text-gray-500">
              33,349 ratings . 4,169 reviews
            </p>
          </div>
          <p className="text-gray-500">
            {pages} pages, first published {year}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Quantity</span>: {quantity}
          </p>
        </div>
        <p className="mt-11">{description}</p>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                1,058 people are currently reading
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                38.1k people want to read
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-bold">About the Author</h1>
          <div className="flex items-center gap-4 mt-5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://images.unsplash.com/photo-1611199340099-91a595a86812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
            </div>
            <div>
              <p className="font-bold text-xl">{author}</p>
              <p className="text-sm text-gray-500 flex items-center gap-3">
                <span>86 books</span>
                <span>4,090 followers</span>
              </p>
            </div>
          </div>
          <div className="mt-5 text-gray-500">
            {author} is the author of two dozen books and novellas, most
            recently {title}, The Family Plot, The Agony House, and the Philip
            K. Dick Award nominee Maplecroft; but she is perhaps best known for
            the steampunk pulp adventures of the Clockwork Century, beginning
            with Boneshaker. Her works have been nominated for the Hugo and
            Nebula awards for science fiction, and have won the Locus Award
            (among others) – and over the years, they’ve been translated into
            nine languages in eleven countries. Cherie lives in Seattle, WA,
            with her husband and a menagerie of exceedingly photogenic pets.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
