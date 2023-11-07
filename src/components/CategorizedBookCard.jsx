import PropTypes from 'prop-types';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const CategorizedBookCard = ({ book }) => {
  const { author, rating, imageLink, title, category, id } = book;
  return (
    <div
      key={book._id}
      className="border-2 px-4 py-6 rounded-lg hover:shadow-2xl hover:shadow-gray-500 duration-700 hover:border-primary-color flex items-center justify-center gap-4"
    >
      <div className="flex-1">
        <img
          src={imageLink}
          className="w-full h-full shadow-lg shadow-gray-300"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold text-gray-600">{title}</h1>
        <p className="text-gray-700 dark:text-gray-400">by {author}</p>
        <p className='text-gray-600'><span className='font-semibold'>Category:</span> {category}</p>
         <Rating style={{ width: '100px' }} value={parseFloat(rating)} readOnly={true} />
        <Link to={`/bookDetails/${book._id}`} className="btn btn-ghost text-primary-color">See book</Link>
      </div>
    </div>
  )
};

CategorizedBookCard.propTypes = {
    book: PropTypes.object.isRequired,
}

export default CategorizedBookCard;
