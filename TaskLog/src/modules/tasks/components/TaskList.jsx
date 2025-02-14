import PropTypes from 'prop-types'
import TaskCard from './TaskCard.jsx'
import EditForm from './EditForm.jsx'

const TaskList = ({ filteredTasks, editingTaskId, setEditingTaskId }) => {
  return (
    <>
      {filteredTasks.length === 0 ? (
        <p className="text-center text-xl bg-gray-200 shadow-lg border-2 border-gray-800 p-8 max-w-xl mx-auto font-extrabold text-gray-800 italic rounded-lg shadow-md">
          Señor, no hay tareas pendientes en su lista. <br /> ¿Me permitirá
          añadir algunas por usted?
        </p>
      ) : (
        <div className="grid  md:grid-cols-4 gap-12">
          {filteredTasks.map((task) => (
            <div key={task.id}>
              {editingTaskId === task.id ? (
                <div key={task.id}>
                  <EditForm
                    task={task}
                    setIsEditing={() => setEditingTaskId(null)}
                  />
                  <TaskCard
                    task={task}
                    setIsEditing={() => setEditingTaskId(task.id)}
                  />
                </div>
              ) : (
                <TaskCard
                  task={task}
                  setIsEditing={() => setEditingTaskId(task.id)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

TaskList.propTypes = {
  filteredTasks: PropTypes.array.isRequired,
  editingTaskId: PropTypes.string,
  setEditingTaskId: PropTypes.func.isRequired
}

export default TaskList
