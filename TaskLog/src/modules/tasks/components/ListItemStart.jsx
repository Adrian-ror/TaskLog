import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {ListItemPrefix} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {statusItemsConfig} from "../../../config/index.js";


const ListItemStart = ({state}) => {

    const [iconConfig, setIconConfig] = useState({
        icon: faCircleNotch,
        options: '',
        style: {},
        animations: {
            beat: false,
            spin: false,
            bounce: false
        }
    });

    useEffect(() => {

        const config = statusItemsConfig.find(item => item.title === state);
        config !== null ? setIconConfig(config) : null;

    }, [state]);

    return (
        <ListItemPrefix className="flex mr-3 items-center align-middle justify-center">
            <FontAwesomeIcon
                icon={iconConfig.icon}
                className={iconConfig.options}
                style={iconConfig.style}
                {...iconConfig.animations}
            />
        </ListItemPrefix>
    );
}

ListItemStart.propTypes = {
    state: PropTypes.string
};

export default ListItemStart;