import PropTypes from 'prop-types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useTaskStore } from '../../../store/useTaskStore.js'
import {
  faCheckToSlot,
  faTrash,
  faPenRuler
} from '@fortawesome/free-solid-svg-icons'

const TaskCard = ({ task, setIsEditing }) => {
  const updateTask = useTaskStore((state) => state.updateTask)
  const [status, setStatus] = useState(task.status)

  const handleStatusChange = (newStatus) => {
    updateTask({ ...task, status: newStatus })
    setStatus(newStatus)
  }

  const progressStyles = {
    Pending: 'bg-blue-500 w-1/2',
    Completed: 'bg-green-500 w-full',
    Canceled: 'bg-red-500 w-6'
  }

  return (
    <div className="relative cursor-pointer bg-gray-200 p-3 border-4 border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Prioridad y Editar */}
      <div className="flex justify-between w-full">
        <div className={`w-5 h-5 rounded-full ${task.priority.color}`} />
        <motion.div
          className="cursor-pointer"
          onClick={() => setIsEditing(task.id)}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FontAwesomeIcon icon={faPenRuler} className="h-5 text-gray-700" />
        </motion.div>
      </div>

      {/* Título */}
      <h3 className="text-xl text-center font-extrabold rounded-lg border-2 text-gray-800 tracking-wide mt-2 mb-2">
        {task.title}
      </h3>

      {/* Descripción */}
      {task.description && (
        <p className="mt-2 text-sm text-center leading-relaxed text-gray-600 font-bold">
          {task.description.length > 20
            ? `${task.description.slice(0, 20)}...`
            : task.description}
        </p>
      )}

      {/* Barra de Progreso */}
      <div className="w-full bg-gray-300 rounded-lg h-1 mt-4">
        <div
          className={`h-2 rounded-lg transition-all duration-500 ${progressStyles[status]}`}
        />
      </div>

      {/* Acciones */}
      <div className="w-full mt-6 flex justify-between">
        {[
          {
            icon: faTrash,
            action: () => handleStatusChange('Canceled'),
            color: 'text-red-800'
          },
          {
            icon: faCheckToSlot,
            action: () =>
              handleStatusChange(
                status === 'Completed' ? 'Pending' : 'Completed'
              ),
            color: status === 'Completed' ? 'text-green-700' : 'text-gray-500'
          }
        ].map(({ icon, action, color }, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 rounded-lg cursor-pointer"
            onClick={action}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FontAwesomeIcon icon={icon} className={`h-6 ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    priority: PropTypes.object.isRequired
  }).isRequired,
  setIsEditing: PropTypes.func
}

export default TaskCard
