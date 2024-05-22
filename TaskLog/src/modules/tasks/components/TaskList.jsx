import PropTypes from "prop-types";
import {TaskItem} from "../index.js";
import {List} from "@material-tailwind/react";

const TaskList = ({items}) => {
    return (
        <List>
            {items && items.map(item => (
                <TaskItem key={item.id} itemKey={item.id} item={item}/>
            ))}
        </List>
    );
}

TaskList.propTypes = {
    items: PropTypes.array.isRequired
};

export default TaskList;