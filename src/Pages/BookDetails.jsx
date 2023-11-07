import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const params = useParams();
    console.log(params);

    const {data} = useQuery({
        queryKey: ['book'],
        queryFn: () => axios.get(`http://localhost:5000/api/v1/allBooks/${params.id}`).then(res => res.data)
    })

    console.log(data);

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    );
};


export default BookDetails;