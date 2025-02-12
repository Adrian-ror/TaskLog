import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  faHouse,
  faTableColumns,
  faTriangleExclamation,
  faEye,
  faTrashCan,
  faChevronDown,
  faChevronUp,
  faBroom,
  faChartSimple,
  faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons'
import NotImplementedModal from '../../common/components/NotImplementedModal.jsx'
import { useTaskStore } from '../../../store/useTaskStore.js'
import SidebarMenuItem from './SidebarMenuItem.jsx'
import PriorityButton from './PriorityButton.jsx'
import TrashButton from './TrashButton.jsx'
import ConfirmModal from './ConfirmModal.jsx'

const DashBoardSidebar = ({ onPriorityChange, onCanceledChange, tasks }) => {
  const [showMenu, setShowMenu] = useState(false)
  const clearCanceledTasks = useTaskStore((state) => state.clearCanceledTasks)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  return (
    <aside className="sidebar rounded-lg fixed lg:static w-[300px] h-full 0 z-45 overflow-y-auto flex flex-col justify-center ">
      <div className="bg-white rounded-xl shadow-lg mb-6 p-4 ">
        <SidebarMenuItem label="Home" icon={faHouse} route="/" />

        <SidebarMenuItem
          label="Dashboard"
          icon={faTableColumns}
          route="dash-board"
        />
        <NotImplementedModal icon={faChartSimple} label="Chart" />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <NotImplementedModal icon={faScrewdriverWrench} label="Settings" />
        {/*
             <a
          href="/user-profile"
          className="flex text-2xl font-bold items-center text-gray-600 hover:text-indigo-900 py-4 transition-all duration-300"
        >
          <span className="material-icons-outlined mr-2">
            <FontAwesomeIcon icon={faFaceGrinWide} />
          </span>
          Profile
          <span className="material-icons-outlined ml-auto">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      */}
        {/*
        
                <a
          href="#"
          className="flex text-2xl font-bold items-center text-gray-600 hover:text-indigo-900 py-4 transition-all duration-300 hover:translate-x-1"
        >
          <span className="material-icons-outlined mr-2">
            <FontAwesomeIcon icon={faPowerOff} />
          </span>
          Log out
          <span className="material-icons-outlined ml-auto">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
        */}
      </div>

      <div className="bg-white  mt-8 rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <PriorityButton
          label="Top Priority"
          onClick={() => onPriorityChange('Top')}
          colorClass="bg-red-500"
        />
        <PriorityButton
          label="Middle Priority"
          onClick={() => onPriorityChange('Middle')}
          colorClass="bg-yellow-400"
        />
        <PriorityButton
          label="Low Priority"
          onClick={() => onPriorityChange('Low')}
          colorClass="bg-green-400"
        />
        <PriorityButton
          label="View All"
          onClick={() => onPriorityChange('All')}
          icon={faEye}
        />
      </div>

      <TrashButton
        onCanceledChange={onCanceledChange}
        tasks={tasks}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setShowConfirmModal={setShowConfirmModal}
      />

      <ConfirmModal
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={setShowConfirmModal}
        clearCanceledTasks={clearCanceledTasks}
      />
    </aside>
  )
}

DashBoardSidebar.propTypes = {
  onPriorityChange: PropTypes.func.isRequired,
  onCanceledChange: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
}
export default DashBoardSidebar
