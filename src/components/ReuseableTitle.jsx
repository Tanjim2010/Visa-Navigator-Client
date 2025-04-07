import PropTypes from "prop-types";


const ReuseableTitle = ({title, paragraph}) => {
    return (
        <div className="max-w-7xl mx-auto text-center p-3">

            <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{paragraph}</p>
            </div>
        </div>
    );
};

ReuseableTitle.propTypes ={
    title: PropTypes.string,
    paragraph: PropTypes.string
}

export default ReuseableTitle;