import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTableColumns,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const ActionButtons = () => {
  return (
    <div className="flex justify-center space-x-4 items-center max-w-4xl">
      <Link
        to="https://github.com/Adrian-ror/TaskLog"
        className="inline-flex items-center border border-gray-500 justify-center w-full px-4 py-2 text-lg font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
        View on GitHub
      </Link>
      <Link
        to="/"
        className="inline-flex bg-green-300 items-center border border-gray-500 justify-center w-full px-4 py-2 text-lg font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-indigo-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon icon={faTableColumns} className="w-5 h-5 mr-3" />
        Go to DashBoard
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 ml-2" />
      </Link>
    </div>
  )
}

export default ActionButtons
