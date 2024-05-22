import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({handleClick}) => {
    return (
        <button
            className=" flex mb-2 justify-center items-center mt-1 ml-2 text-red-500 bg-gray-300 border border-black font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClick}
        >
            Delete Tasks
            <FontAwesomeIcon icon={faTrash} shake style={{color: "#940f05",}} className="ml-6"/>
        </button>
    );
}

DeleteButton.propTypes = {
    handleClick: PropTypes.func
};

export default DeleteButton;