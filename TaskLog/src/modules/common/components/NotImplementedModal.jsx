import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NotImplementedModal = ({ icon, label }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Modal toggle */}
      <Link
        onClick={() => setIsOpen(true)}
        className="flex items-center text-md font-bold text-gray-600 hover:text-indigo-900 py-2 transition-all duration-300 hover:translate-x-1"
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <span className="flex-1">{label}</span>
        <FontAwesomeIcon icon={faChevronRight} className="ml-auto" />
      </Link>

      {/* Main modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-xl bg-gray-300 rounded-lg shadow-lg">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 rounded-t">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <img
                  className="h-10 w-auto rounded-lg mr-8"
                  src="/scientist.png"
                  alt="Logo"
                />
                Feature Not Implemented
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-10 h-10 inline-flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faXmark} className="h-4" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-sm leading-relaxed text-gray-600 font-bold">
                The feature you clicked on is not implemented yet. We are
                working hard to bring new functionalities to improve your
                experience.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 font-bold">
                Please check back later for updates. We appreciate your patience
                and understanding.
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

NotImplementedModal.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
}

export default NotImplementedModal
