import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SidebarMenuItem = ({ label, icon, route }) => (
  <Link
    to={route}
    className="flex text-2xl font-bold items-center text-gray-600 hover:text-indigo-900 py-4 transition-all duration-300 hover:translate-x-1"
  >
    <span className="material-icons-outlined mr-2">
      <FontAwesomeIcon icon={icon} />
    </span>
    {label}
    <span className="material-icons-outlined ml-auto">
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
  </Link>
)

SidebarMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired
}

export default SidebarMenuItem
