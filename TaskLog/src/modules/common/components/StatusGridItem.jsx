import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const StatusGridItem = ({item, idKey, checked, handleChange}) => {

    return (
        <li key={item.title} className="h-full">
            <input type="checkbox"
                   id={idKey}
                   value={item.title.trim()}
                   className="hidden peer"
                   checked={checked}
                   required=""
                   onChange={(e) => handleChange(e.target.value)}
            />

            <label htmlFor={idKey}
                   className={`${checked ? 'bg-white text-black' : ''} flex flex-col items-center 
                   justify-center h-full p-5 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer 
                   dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-gray-500 hover:text-gray-600 
                   dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 
                   dark:bg-gray-800 dark:hover:bg-gray-700`}>

                <div className="block text-center ">

                    <FontAwesomeIcon icon={item.icon}
                                     style={item.style}
                                     className={item.options}
                                     {...item.animations}
                    />

                    <div className="w-full text-lg font-semibold">
                        {item.title}
                    </div>

                </div>

            </label>
        </li>
    );
}

StatusGridItem.propTypes = {
    item: PropTypes.object.isRequired,
    idKey: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default StatusGridItem;