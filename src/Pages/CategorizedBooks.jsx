import { useLoaderData, useParams } from "react-router-dom";
import HeadBanner from "../components/HeadBanner";
import CategorizedBookCard from "../components/CategorizedBookCard";



const CategorizedBooks = () => {
    const books = useLoaderData();
    const params = useParams()
    return (
        <div className="container mx-auto">
            <HeadBanner title={params.id.toLocaleUpperCase()}/>


            <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book =>  <CategorizedBookCard key={book._id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default CategorizedBooks;