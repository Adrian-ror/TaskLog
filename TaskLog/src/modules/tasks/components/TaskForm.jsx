import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faPlus,
  faFeatherPointed
} from '@fortawesome/free-solid-svg-icons'
import { priorities, statusOptions } from '../../../config/index.js'
import { useTaskStore } from '../../../store/useTaskStore.js'

const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const addTask = useTaskStore((state) => state.addTask)

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: priorities.TOP
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTaskData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePriorityChange = (value) => {
    setTaskData((prev) => ({
      ...prev,
      priority: priorities[value.toUpperCase()] || priorities.TOP
    }))
  }

  const handleSubmit = () => {
    addTask({ ...taskData, status: statusOptions.PENDING })
    setTaskData({ title: '', description: '', priority: priorities.TOP })
    setIsOpen(false)
  }

  return (
    <>
      {/* Botón para abrir modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-0.5 border-2 rounded-lg bg-green-500 text-white"
      >
        <FontAwesomeIcon icon={faPlus} className="h-7 w-7" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-xl bg-gray-300 rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 rounded-t">
              <img
                className="h-10 w-auto rounded-lg mr-4"
                src="/inkwell.png"
                alt="Logo"
              />
              <h3 className="w-full text-center text-xl font-serif font-bold text-gray-900">
                How may I assist you, sir?
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-gray-200 rounded-lg text-lg w-10 h-10 flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faXmark} className="h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 md:p-5 space-y-4">
              {/* Título */}
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-900">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Buy bread"
                  value={taskData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-900">
                  Description
                </label>
                <textarea
                  name="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write a description..."
                  value={taskData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Prioridad */}
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Priority
                </label>
                <select
                  name="priority"
                  value={taskData.priority.name}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                >
                  {Object.values(priorities).map((priority) => (
                    <option key={priority.id} value={priority.name}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white bg-blue-800 hover:bg-blue-900 font-bold rounded-lg text-sm px-4 py-2"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="text-white bg-blue-800 hover:bg-blue-900 font-bold rounded-lg text-sm px-4 py-2 flex items-center"
              >
                <FontAwesomeIcon icon={faFeatherPointed} className="mr-3 h-6" />
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TaskForm
