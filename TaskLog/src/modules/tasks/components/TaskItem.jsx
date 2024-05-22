import PropTypes from "prop-types";
import {ListItem} from "@material-tailwind/react";
import {ListItemEnd, ListItemStart} from "../index.js";

const TaskItem = ({itemKey, item}) => {
    return (
        <ListItem ripple={false}
                  key={itemKey}
                  className={` items-center mt-2 mb-2 py-1 pr-1 pl-4`}
        >
            <ListItemStart state={item.status}/>
            {item.title}
            <ListItemEnd item={item}/>
        </ListItem>
    );
}

TaskItem.propTypes = {
    itemKey: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
};

export default TaskItem;