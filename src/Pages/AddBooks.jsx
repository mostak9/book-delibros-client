import axios from "axios";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddBooks = () => {

  const {user} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const author = form.author.value;
        const imageLink = form.image.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.details.value;
        const pages = form.pages.value;
        const link = form.link.value; 
        const bookData = {title,
            author,
            imageLink,
            quantity,
            rating,
            category,
            description, pages, link};
        console.log(bookData);
        
        axios.post(`http://localhost:5000/api/v1/addBook?email=${user.email}`, bookData, {withCredentials: true})
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                swal("Success!", "Book added Successfully", "success");
                form.reset();
            }
        })

        
    }
  return (
    <div className=" container mx-auto backdrop-blur bg-primary-color/40 min-h-screen mt-14 pt-4 pb-14 rounded-md">
        <div className="text-center mt-5 mb-6">
        <h1 className="text-3xl text-black font-bold">Add Book</h1>
        <hr className="border-2 border-primary-color max-w-[120px] my-4 mx-auto rounded-md" />
        <p className="max-w-2xl mx-auto mt-5  text-black">
        Fill the form with required fields to add a new Book
        </p>
      </div>
      <form onSubmit={handleSubmit} action="" className="space-y-8 px-6 ">
        {/* name field */}
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="name">
            Book Title
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type book name here"
            className="text-sm input input-bordered w-full "
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* author field */}
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="image">
            Author
          </label>
          <input
            type="text"
            name="author"
            placeholder="Put author here"
            className="input input-bordered w-full text-sm"
            required
          />
        </div>
        {/* image field */}
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="image">
            Image Link
          </label>
          <input
            type="text"
            name="image"
            placeholder="Put your image link here"
            className="input input-bordered w-full text-sm"
            required
          />
        </div>
        {/* pdf field */}
        
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="name">
            Pdf link
          </label>
          <input
            type="text"
            name="link"
            placeholder="Put pdf link here"
            className="text-sm input input-bordered w-full "
            required
          />
        </div>
        {/* category, quantity, rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category */}
          <div>
            <select
              name="category"
              className="select select-bordered w-full max-w-xs"
              required
            >
              <option disabled selected>
                Choose your category
              </option>
              <option>novel</option>
              <option>technology</option>
              <option>career</option>
              <option>astronomy</option>
            </select>
          </div>
          
          {/* quantity */}
          <div className="flex items-center gap-2">
            <label className="text-black" htmlFor="quantity">
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Enter book quantity here"
              className="input input-bordered w-full text-sm"
              required
            />
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <label className="text-black" htmlFor="rating">
              Rating (out of 5):
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rate your book"
              className="input input-bordered w-full text-sm"
              required
            />
          </div>
          {/* pages */}
          <div className="flex items-center gap-2">
            <label className="text-black" htmlFor="rating">
              Pages:
            </label>
            <input
              type="text"
              name="pages"
              placeholder="Total pages"
              className="input input-bordered w-full text-sm"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="image">
            Book Details
          </label>
          <textarea
            id="details"
            name="details"
            className="textarea textarea-bordered h-40  w-full"
            placeholder="Write a short description about your book"
            required
          ></textarea>
        </div>
        {/* submit button */}

        <div>
          <input
            type="submit"
            value="Add Book"
            className="btn  w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
