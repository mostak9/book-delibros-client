import { useState } from 'react';
import Bg from '../../assets/box_img.jpg';


const OurInfo = () => {
    const [about, setAbout] = useState(true);
    const [goal, setGoal] = useState(false);
    const [join, setJoin] = useState(false)

    return (
        <div className='flex flex-col md:flex-row gap-14 items-center mt-20'>
            <div className='lg:w-2/3 md:clip-style' >
                <img src={Bg} className='w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 ' alt="" />
            </div>
            <div className='flex items-center gap-12 flex-col-reverse md:flex-row md:w-3/4 px-5'>
            <div>
            <div className={about ? 'space-y-6' : 'hidden'}>
                <h1 className='text-4xl font-bold'>A Few Words About Our Library</h1>
                <p className='text-gray-500'>MagicBook Library was founded in 1980 to provide access to books, the world’s most valuable source of knowledge.</p>
                <button className='btn btn-lg bg-primary-color'>Read More</button>
            </div>
            <div className={goal ? 'space-y-6' : 'hidden'}>
                <h1 className='text-4xl font-bold'>What We Want to Achieve</h1>
                <p className='text-gray-500'>Our global goals are to help our visitors and readers discover more great books and learn about young and popular authors</p>
                <button className='btn btn-lg bg-primary-color'>Read More</button>
            </div>
            <div className={join ? 'space-y-6' : 'hidden'}>
                <h1 className='text-4xl font-bold'>Join Our Readership Community</h1>
                <p className='text-gray-500'>We are always glad to welcome new library members to our community, which unites writers, poets, readers, and book enthusiasts.</p>
                <button className='btn btn-lg bg-primary-color'>Read More</button>
            </div>
           
            </div>
            <div className='flex flex-col gap-0 lg:w-3/4 text-center'>
               <div onClick={() => {
                setAbout(true);
                setGoal(false);
                setJoin(false);
               }} className={about ? 'w-full h-full px-5 py-3 lg:p-11 bg-gray-700 hover:bg-gray-800 text-white font-bold border-b' : 'w-full h-full px-5 py-3 lg:p-11 bg-gray-900 hover:bg-gray-800 text-white font-bold border-b'}>About Us</div>
               <div onClick={() => {
                setAbout(false);
                setGoal(true);
                setJoin(false);
               }} className={goal ? 'w-full h-full px-5 py-3 lg:p-11 bg-gray-700 hover:bg-gray-800 text-white font-bold border-b' : 'w-full h-full px-5 py-3 lg:p-11 bg-gray-900 hover:bg-gray-800 text-white font-bold border-b'}>Our Goals</div>
               <div onClick={() => {
                setAbout(false);
                setGoal(false);
                setJoin(true);
               }} className={join ? 'w-full h-full px-5 py-3 lg:p-11 bg-gray-700 hover:bg-gray-800 text-white font-bold border-b' : 'w-full h-full px-5 py-3 lg:p-11 bg-gray-900 hover:bg-gray-800 text-white font-bold border-b'}>Join The Library</div>
            </div>
            </div>

        </div>
    );
};

export default OurInfo;