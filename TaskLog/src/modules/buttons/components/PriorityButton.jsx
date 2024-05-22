import PropTypes from "prop-types";
import {priorities} from "../../../config/index.js";

const PriorityButton = ({priorityName}) => {

    return (
        <button
            className={`${priorities[priorityName.toUpperCase()].color || ''} text-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150`}
            type="button">

            {priorityName}

        </button>
    );
}

PriorityButton.propTypes = {
    priorityName: PropTypes.string
};

export default PriorityButton;