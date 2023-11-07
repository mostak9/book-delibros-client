import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { useParams } from "react-router-dom";

const BookDetails = () => {
  const params = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["book"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/api/v1/allBooks/${params.id}`)
        .then((res) => res.data),
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
    category,
    id,
    quantity,
    pages,
    year,
    description,
  } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      <div className="flex flex-col items-center gap-4">
        <img src={imageLink} className="w-2/3 mx-auto" alt="" />
        <button className="btn bg-primary-color btn- btn-wide">
          Read the Book
        </button>
        <button className="btn btn-outline btn-wide text-primary-color border-primary-color">
          Borrow The book
        </button>
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
                <p className="text-sm text-gray-500 flex items-center gap-3"><span>86 books</span><span>4,090 followers</span></p>
            </div>
          </div>
          <div className="mt-5 text-gray-500">
          {author} is the author of two dozen books and novellas, most recently {title}, The Family Plot, The Agony House, and the Philip K. Dick Award nominee Maplecroft; but she is perhaps best known for the steampunk pulp adventures of the Clockwork Century, beginning with Boneshaker. Her works have been nominated for the Hugo and Nebula awards for science fiction, and have won the Locus Award (among others) – and over the years, they’ve been translated into nine languages in eleven countries. Cherie lives in Seattle, WA, with her husband and a menagerie of exceedingly photogenic pets.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
