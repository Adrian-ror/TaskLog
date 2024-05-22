import PropTypes from "prop-types";

const ModalFooter = ({handleClose , handleSave}) => {

    return (
        <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">

            <button
                className="text-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleClose(false)}
            >

                Close

            </button>

            <button
                className="text-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSave}
            >

                Save

            </button>

        </div>
    );
}

ModalFooter.propTypes = {
    handleClose: PropTypes.func,
    handleSave: PropTypes.func

};


export default ModalFooter;




