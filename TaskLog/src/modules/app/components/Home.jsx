import AddTaskForm from "../../forms/components/AddTaskForm.jsx";
import {TaskListCard} from "../../tasks/index.js";

const Home = () => {

    return (

            <div className="flex flex-col justify-center items-center w-full h-full mb-8">
                <TaskListCard/>
                <div className="flex justify-center items-center mt-4">
                    <AddTaskForm/>
                </div>
            </div>
    );
}

export default Home;
