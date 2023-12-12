import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button, Card, Typography } from "@material-tailwind/react";
import Heading from "../components/Heading";
import { GiReturnArrow } from "react-icons/gi";
import { AiFillRead } from "react-icons/ai";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["borrowedBooks"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/borrowBook?email=${user.email}`
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

  const TABLE_HEAD = ["Cover", "Title", "Author", "Borrowed Date", "Return Date", ""];

  const handleReturn = async (id, bookId) => {
    console.log(id, bookId);

    const res = await axios.get(
      `http://localhost:5000/api/v1/allBooks/${bookId}?read=true`
    );
    const originalBook = res.data;
    console.log(originalBook);

    swal({
      title: "Are you sure?",
      text: "You want to return the book?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/api/v1/deleteBorrowedBook/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              axios
                .patch(
                  `http://localhost:5000/api/v1/updateQuantity/${bookId}`,
                  { quantity: originalBook.quantity + 1 }
                )
                .then(() => {
                  swal("You return the book successfully!", {
                    icon: "success",
                  });
                });
            }
            refetch();
          });
      } else {
        swal("Book return unsuccessful!");
      }
    });
  };

  return (
    <div>
      {data ? (
        <div>
          <Heading title="Your Borrowed Books" />
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b font-bold border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(({ img, title, author, returnDate, bookId, _id, borrowedDate }) => (
                  <tr key={_id} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <img src={img} className="w-20" alt="" />
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {author}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {borrowedDate}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {returnDate}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal flex flex-col gap-2 items-center"
                      >
                        <Link to={`/readBook/${bookId}`}>
                          <Button
                            size="sm"
                            className="flex items-center gap-1"
                            color="blue"
                          >
                            Read
                            <AiFillRead />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleReturn(_id, bookId)}
                          size="sm"
                          className="flex items-center gap-1"
                          color="red"
                        >
                          Return
                          <GiReturnArrow />
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      ) : (
        <div className="text-center flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold">Empty Borrow Collection</h1>:
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
