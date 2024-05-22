import PropTypes from "prop-types";
import {priorities} from "../../../config/index.js";

const PrioritySelector = ({value, handleValueChange, label, color, margin}) => {

    return (
        <div className={`${margin}`}>

            {label && (
                <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
                        Select a priority
                </label>
            )}

            <select
                id="priority"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                className={`text-center ${color} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            >
                {Object.values(priorities).map((priority) => (
                    <option key={priority.id} value={priority.name}>
                        {priority.name}
                    </option>
                ))}
            </select>

        </div>
    );
}


PrioritySelector.propTypes = {
    value: PropTypes.string,
    handleValueChange: PropTypes.func,
    label: PropTypes.bool,
    color: PropTypes.string,
    margin: PropTypes.string
};

export default PrioritySelector;




