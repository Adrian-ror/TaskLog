import PropTypes from "prop-types";

const AddButton = ({work}) => {

    return (
        <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm rounded-full shadow hover:bg-gray-800 outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => work(true)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                      clipRule="evenodd"/>
            </svg>
        </button>
    );
}


AddButton.propTypes = {
    work: PropTypes.func
};

export default AddButton;




