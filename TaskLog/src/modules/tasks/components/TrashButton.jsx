import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashCan,
  faChevronUp,
  faChevronDown,
  faBroom
} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const TrashButton = ({
  onCanceledChange,
  tasks,
  showMenu,
  setShowMenu,
  setShowConfirmModal
}) => (
  <div>
    <div className="bg-red-200 border-2 border-gray-700 mt-8 rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button
        onClick={onCanceledChange}
        className="flex text-2xl font-bold items-center text-gray-600 hover:text-indigo-900 transition-all py-2 duration-300 w-full justify-between"
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="h-8 text-gray-700 mr-3"
          />
          Trash
        </div>
        <div>
          <span className="font-bold text-gray-800 bg-gray-300 rounded-full px-4 py-2 border-2 border-gray-800">
            {tasks.filter((task) => task.status === 'Canceled').length}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowMenu(!showMenu)
            }}
            className="ml-4 text-gray-800 hover:text-gray-900"
          >
            {showMenu ? (
              <FontAwesomeIcon icon={faChevronUp} className="h-6" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="h-6" />
            )}
          </button>
        </div>
      </button>
    </div>
    {showMenu && (
      <div
        className="bg-white border border-gray-500 shadow-md rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowConfirmModal(true)}
          className="block w-full text-center p-4 text-xl text-gray-700 font-extrabold hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faBroom} className="h-6 mr-2" />
          Empty Trash
        </button>
      </div>
    )}
  </div>
)

TrashButton.propTypes = {
  onCanceledChange: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
  setShowConfirmModal: PropTypes.func.isRequired
}

export default TrashButton
