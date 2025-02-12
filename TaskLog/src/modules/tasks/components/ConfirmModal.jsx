import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const ConfirmModal = ({
  showConfirmModal,
  setShowConfirmModal,
  clearCanceledTasks
}) =>
  showConfirmModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-red-600 text-5xl mb-4 h-16"
          />
          <h2 className="text-2xl font-bold text-gray-900">Are you sure?</h2>
          <p className="text-xl leading-relaxed text-gray-600 font-bold mt-2">
            This action will permanently delete all tasks in the trash.
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-300 border border-gray-800 text-gray-900 px-8 py-2.5 rounded-lg text-lg font-bold hover:bg-gray-500"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-700 border border-gray-800 text-white px-8 py-2.5 rounded-lg text-lg font-bold hover:bg-red-800"
            onClick={() => {
              clearCanceledTasks()
              setShowConfirmModal(false)
            }}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  )

ConfirmModal.propTypes = {
  showConfirmModal: PropTypes.bool.isRequired,
  setShowConfirmModal: PropTypes.func.isRequired,
  clearCanceledTasks: PropTypes.func.isRequired
}

export default ConfirmModal
