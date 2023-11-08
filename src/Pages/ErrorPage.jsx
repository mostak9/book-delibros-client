import { Link } from 'react-router-dom';
import img from '../assets/error.png';
import {BsArrowLeft} from 'react-icons/bs';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center'>
                <img src={img} className='mb-5' alt="" />
                <div className='text-4xl font-bold text-center'>Page not found</div>
                <Link to={'/'} className='btn btn-link btn-wide'><BsArrowLeft className='text-xl'/> Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;