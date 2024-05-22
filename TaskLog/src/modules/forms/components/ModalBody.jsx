import PropTypes from "prop-types";
import {PrioritySelector} from "../../common/index.js";
import StatusGrid from "../../common/components/StatusGrid.jsx";
import {statusItemsConfig} from "../../../config/index.js";

const ModalBody = ({inputValue, handleInput, selectValue, handleSelect, edit, gridValue, handleGrid}) => {

    return (
        <div className="relative p-6 flex-auto w-full">
            <div className="mb-4 flex items-center justify-items-start w-full">
                <div className="mr-6 justify-items-start w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="title">
                        Title
                    </label>
                    <input
                        className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" type="text" placeholder="Title" value={inputValue}
                        onChange={(e) => {
                            handleInput(e.target.value)
                        }}/>
                    <PrioritySelector value={selectValue} handleValueChange={handleSelect} label={true} margin={`${edit ? 'mb-4' : ''}`}/>

                    {edit && (
                        <StatusGrid items={statusItemsConfig} state={gridValue} handleChange={handleGrid} edit={true}/>
                    )}


                </div>
            </div>
        </div>
    );
}

ModalBody.propTypes = {
    inputValue: PropTypes.string,
    handleInput: PropTypes.func,
    selectValue: PropTypes.string,
    handleSelect: PropTypes.func,
    edit: PropTypes.bool,
    gridValue: PropTypes.string,
    handleGrid: PropTypes.func
};

export default ModalBody;




