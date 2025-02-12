import PropTypes from 'prop-types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckToSlot,
  faTrash,
  faPenRuler
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useTaskStore } from '../../../store/useTaskStore.js'

const TaskCard = ({ task, setIsEditing }) => {
  const [status, setStatus] = useState(task.status)

  const toggleCompletion = () => {
    var newStatus
    if (status === 'Completed') {
      newStatus = 'Pending'
    } else {
      newStatus = 'Completed'
    }

    updateTask({
      id: task.id,
      title: task.title,
      priority: task.priority,
      status: newStatus
    })

    setStatus(newStatus)
  }

  const toggleCanceled = () => {
    updateTask({
      id: task.id,
      title: task.title,
      priority: task.priority,
      status: 'Canceled'
    })

    setStatus('Canceled')
  }
  const updateTask = useTaskStore((state) => state.updateTask)

  const progressStyles = {
    Pending: 'bg-blue-500 w-1/2',
    Completed: 'bg-green-500 w-full',
    Canceled: 'bg-red-500 w-6'
  }

  return (
    <div
      className={`relative cursor-pointer bg-gray-200 p-6 border-4 border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {/* Prioridad y Check */}
      <div className="flex justify-between w-full">
        <div className={`w-6 h-6 rounded-full ${task.priority.color}`}></div>
        <motion.div
          className="w-8 h-8 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            setIsEditing(task.id)
          }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FontAwesomeIcon
            icon={faPenRuler}
            className="h-8"
            style={{ color: '#3e3d3d' }}
          />
        </motion.div>
      </div>
      {/* Título */}
      <h3 className="text-3xl text-center font-extrabold rounded-lg border-2 text-gray-800 tracking-wide mt-4 mb-4">
        {task.title}
      </h3>
      {/* Descripción */}
      <p className="mt-2 text-xl text-center leading-relaxed text-gray-600 font-bold">
        {task.description && task.description.length > 70
          ? task.description.slice(0, 70) + '...'
          : task.description}
      </p>

      {/* Barra de Progreso */}
      <div className="w-full bg-gray-300 rounded-lg h-4 mt-4">
        <div
          className={`h-4 rounded-lg transition-all duration-500  ${progressStyles[status]}`}
        ></div>
      </div>
      <div>
        <div className="w-full mt-6 flex justify-between mr-2">
          <motion.div
            className="w-8 h-8 rounded-lg cursor-pointer"
            onClick={toggleCanceled}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faTrash} className="h-8 text-red-800" />
          </motion.div>

          <motion.div
            className="w-8 h-8 rounded-lg cursor-pointer"
            onClick={toggleCompletion}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FontAwesomeIcon
              icon={faCheckToSlot}
              className="h-8"
              style={{ color: status === 'Completed' ? '#057050' : '#61666c' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.object.isRequired
  }).isRequired,
  setIsEditing: PropTypes.func
}

export default TaskCard
