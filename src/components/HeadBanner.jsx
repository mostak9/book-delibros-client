import PropTypes from 'prop-types'
import Bg from '../assets/library.jpg'

const HeadBanner = ({title}) => {
    return (
        <div className='w-full h-80 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${Bg})`}}>
            <div className='text-center flex items-center justify-center p-10 w-full h-full bg-gray-900/40'>
                <div>
                    <h1 className='text-5xl font-bold mb-3 text-white'>EXPLORE <span className='text-primary-color'>{title}</span> BOOKS</h1>
                    <hr className='border-4 rounded-md border-primary-color max-w-[150px] mx-auto' />
                </div>
            </div>
        </div>
    );
};

HeadBanner.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HeadBanner;