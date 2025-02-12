import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriorityButton = ({ label, onClick, colorClass, icon }) => (
  <button
    onClick={onClick}
    className="flex text-2xl border-b-2 border-gray-300 font-bold items-center text-gray-600 hover:text-indigo-900 py-4 transition-all duration-300 hover:translate-x-1"
  >
    {colorClass ? (
      <span className={`material-icons-outlined mr-8`}>
        <div className={`w-6 h-6 rounded-full ${colorClass}`} />
      </span>
    ) : (
      <FontAwesomeIcon icon={icon} className="material-icons-outlined mr-8" />
    )}

    {label}
  </button>
)

PriorityButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colorClass: PropTypes.string,
  icon: PropTypes.object
}

export default PriorityButton
