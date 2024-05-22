import {useState} from "react";
import PropTypes from "prop-types";
import {EditButton} from "../../buttons/index.js";
import ModalFooter from "./ModalFooter.jsx";
import {useTaskStore} from "../../../store/useTaskStore.js";
import {priorities} from "../../../config/index.js";
import {ModalBody, ModalHeader} from "../index.js";

const EditTaskForm = ({task}) => {

    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [priority, setPriority] = useState(task.priority);
    const [status, setStatus] = useState(task.status);

    const updateTask = useTaskStore(state => state.updateTask);

    const handleSubmit = () => {
        setShowModal(false);
        updateTask({ id: task.id, title, priority, status});
    }

    const handlePriorityChange = (name) => {
        if (priorities[name.toUpperCase()]) setPriority(priorities[name.toUpperCase()])
    }

    return (
        <>
            <EditButton work={setShowModal}/>

            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <ModalHeader modalTitle={"Edit Task"}/>

                                <ModalBody
                                    inputValue={title}
                                    handleInput={setTitle}
                                    selectValue={priority.name}
                                    handleSelect={handlePriorityChange}
                                    edit={true}
                                    gridValue={status}
                                    handleGrid={setStatus}
                                />

                                <ModalFooter handleClose={setShowModal} handleSave={handleSubmit}/>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

EditTaskForm.propTypes = {
    task: PropTypes.object
};


export default EditTaskForm;