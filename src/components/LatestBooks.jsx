import { useQuery } from "@tanstack/react-query";
import Heading from "./Heading";
import axios from "axios";
import CategorizedBookCard from "./CategorizedBookCard";

const LatestBooks = () => {
    const {data: books, isLoading} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/api/v1/latestEditions')
            return res.data;
        }
    })
    if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
    return (
        <div className="container mx-auto">
            <div className="my-12">
            <Heading title='Latest Editions'/>
            <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <CategorizedBookCard key={book._id} book={book}/>)
                }
            </div>
            </div>
        </div>
    );
};

export default LatestBooks;