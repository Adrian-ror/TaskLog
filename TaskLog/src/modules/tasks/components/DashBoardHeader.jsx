import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTableList,
  faExclamationCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { Clock } from '../../common/index.js'

const DashboardHeader = ({ filteredTasks, tasks }) => {
  const pendingCount = tasks.filter((task) => task.status === 'Pending').length
  const completedCount = tasks.filter(
    (task) => task.status === 'Completed'
  ).length

  return (
    <div className="flex flex-row lg:flex-row gap-4 mb-6">
      <div className="shadow-lg border-2 flex-1 bg-red-100 border-red-200 rounded-xl p-6 animate-fade-in">
        <h2 className="text-4xl md:text-5xl text-red-900">
          Welcome <strong>Dashboard</strong>
        </h2>
        <Clock />
      </div>
      <div className="flex-1 shadow-lg border-2 bg-red-100 border-red-200 rounded-xl p-6 animate-fade-in">
        <h2 className="flex items-center text-4xl md:text-5xl text-red-900">
          <FontAwesomeIcon
            icon={faTableList}
            className="text-red-900 mr-3 h-10"
          />
          Task Inbox <strong className="ml-2">({filteredTasks.length})</strong>
        </h2>
        <div className="mt-8 flex justify-between text-2xl text-gray-700">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="h-7 text-blue-500"
            />
            <span className="font-bold">Pending:</span>
            <span className="font-bold">{pendingCount}</span>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="h-7 text-green-500"
            />
            <span className="font-bold">Completed:</span>
            <span className="font-bold">{completedCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

DashboardHeader.propTypes = {
  filteredTasks: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired
}

export default DashboardHeader
