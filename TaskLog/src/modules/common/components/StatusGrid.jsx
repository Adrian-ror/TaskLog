import PropTypes from "prop-types";
import StatusGridItem from "./StatusGridItem.jsx";
import {statusOptions} from "../../../config/index.js";

const StatusGrid = ({items, state, handleChange, edit}) => {

    const showAllItem = items.find(item => item.title === statusOptions.SHOWALL);
    const otherItems = items.filter(item => item.title !== statusOptions.SHOWALL);

    return (
        <div>
            {edit && (
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="showAllStatusGrid">
                    Mark As:
                </label>
            )}

            {showAllItem && !edit && (
                <ul id="showAllStatusGrid" className="grid w-full mb-2 md:grid-cols-1 gap-1 md:grid-rows-1">
                    <StatusGridItem
                        item={showAllItem}
                        idKey={`${showAllItem.title.trim().toLowerCase()}-option`}
                        checked={state === showAllItem.title.trim()}
                        handleChange={handleChange}
                    />
                </ul>
            )}

            <ul id={`stateGrid-${edit ? "edit" : ''}`}
                className="grid w-full md:grid-cols-4 gap-1 md:grid-rows-2">
                {otherItems && otherItems.map(item => (
                    <StatusGridItem
                        key={`${item.title.trim().toLowerCase()}-${edit ? "edit" : ''}gridItem`}
                        item={item}
                        idKey={`${item.title.trim().toLowerCase()}-${edit ? "edit" : ''}option`}
                        checked={state === item.title.trim()}
                        handleChange={handleChange}
                    />
                ))}
            </ul>

        </div>
    );
}

StatusGrid.propTypes = {
    items: PropTypes.array.isRequired,
    state: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    edit: PropTypes.bool
};

export default StatusGrid;
