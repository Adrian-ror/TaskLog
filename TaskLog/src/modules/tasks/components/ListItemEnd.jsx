import PropTypes from "prop-types";
import {ListItemSuffix} from "@material-tailwind/react";
import {PriorityButton} from "../../buttons/index.js";
import {EditTaskForm} from "../../forms/index.js";


const ListItemEnd = ({item}) => {

    return (
        <ListItemSuffix className="flex">
            <PriorityButton priorityName={item.priority.name}/>
            <EditTaskForm task={item}/>
        </ListItemSuffix>
    );
}

ListItemEnd.propTypes = {
    item: PropTypes.object
};

export default ListItemEnd;