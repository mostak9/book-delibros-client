import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";


const ReadBook = () => {
    const {id} = useParams();
    const {data, isLoading} = useQuery({
        queryKey: ['book'],
        queryFn: () => axios.get(`https://libraria-server-assignment-11.vercel.app/api/v1/allBooks/${id}?read=true`).then(res => res.data),
    })
    if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );


    return (
        <div>
            <div className="text-center px-5">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="text-xl">by {data.author}</p>
            </div>
            <div className="mt-6">
            <iframe
        src={data.link}
        title={data?.title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen = {true}
        className="max-w-4xl w-2/3 mx-auto h-screen"
      ></iframe>
            </div>
        </div>
    );
};

export default ReadBook;