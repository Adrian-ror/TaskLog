import {Card} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useTaskStore} from "../../../store/useTaskStore.js";
import StatusGrid from "../../common/components/StatusGrid.jsx";
import {statusItemsConfig , statusOptions} from "../../../config/index.js";
import {DeleteButton} from "../../buttons/index.js";
import {NoTasksMessage, TaskList} from "../index.js";


const TaskListCard = () => {

    const tasks = useTaskStore(state => state.tasks);
    const filterTasksByStatus = useTaskStore(state => state.filterTasksByStatus);
    const clearAllTasks = useTaskStore(state => state.clearAllTasks);

    const [status, setStatus] = useState(statusOptions.PENDING);
    const [items, setItems] = useState(tasks);

    useEffect(() => {
        status !== statusOptions.SHOWALL ? setItems(filterTasksByStatus(status)) : setItems(tasks);
    }, [filterTasksByStatus, status, tasks]);


    return (
        <>
            <Card className="w-full max-w-screen-md bg-red-50">
                <DeleteButton handleClick={clearAllTasks}/>
                <StatusGrid items={statusItemsConfig} state={status} handleChange={setStatus} edit={false}/>
                { items.length !== 0 ? <TaskList items={items}/> : <NoTasksMessage/> }
            </Card>
        </>
    );
}


export default TaskListCard;
