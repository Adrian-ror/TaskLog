import PropTypes from 'prop-types'
import TaskCard from './TaskCard.jsx'
import EditForm from './EditForm.jsx'

const TaskList = ({ filteredTasks, editingTaskId, setEditingTaskId }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  )
}

TaskList.propTypes = {
  filteredTasks: PropTypes.array.isRequired,
  editingTaskId: PropTypes.string,
  setEditingTaskId: PropTypes.func.isRequired
}

export default TaskList
