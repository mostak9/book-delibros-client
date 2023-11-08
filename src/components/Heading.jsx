import PropTypes from "prop-types";

const Heading = ({title, description}) => {
    return (
        <div className="px-5 lg:px-0 mb-6 mt-8"
        data-aos="fade-up"
     data-aos-duration="2000"
        >
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <hr className="border-2 rounded-lg border-primary-color max-w-[200px]" />
            {
                description && <p className="text-gray-500">{description}</p>
            }
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default Heading;