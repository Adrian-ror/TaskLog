import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpAZ, faArrowUpZA } from '@fortawesome/free-solid-svg-icons'
import TaskForm from './TaskForm.jsx'

const TaskFilters = ({ sort, handleSortChange }) => {
  return (
    <div className="mt-8 mb-8 flex justify-between text-lg text-gray-700">
      <button
        className={`p-2 border-2 rounded-md ${
          sort === 'ASC' ? 'bg-green-500' : 'bg-blue-700'
        } text-white`}
        onClick={handleSortChange}
      >
        <FontAwesomeIcon
          icon={sort === 'ASC' ? faArrowUpZA : faArrowUpAZ}
          className="h-10"
        />
      </button>
      <TaskForm />
    </div>
  )
}

TaskFilters.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired
}

export default TaskFilters
