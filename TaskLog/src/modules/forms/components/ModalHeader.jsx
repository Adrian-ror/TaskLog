import PropTypes from "prop-types";

const ModalHeader = ({modalTitle}) => {

    return (
        <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold ">
                {modalTitle}
            </h3>
        </div>
    );
}

ModalHeader.propTypes = {
    modalTitle: PropTypes.string

};

export default ModalHeader;




