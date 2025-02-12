import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { priorities, statusOptions } from '../../../config/index.js'
import { useTaskStore } from '../../../store/useTaskStore.js'
import PropTypes from 'prop-types'

import { faXmark, faFeatherPointed } from '@fortawesome/free-solid-svg-icons'

const EditForm = ({ task, setIsEditing }) => {
  const [title, setTitle] = useState(task.title || '')

  const [description, setDescription] = useState(task.description || '')
  const [priority, setPriority] = useState(task.priority || priorities.TOP)
  const updateTask = useTaskStore((state) => state.updateTask)

  const handlePriorityChange = (name) => {
    if (priorities[name.toUpperCase()]) {
      setPriority(priorities[name.toUpperCase()])
    }
  }

  const handleSubmit = () => {
    updateTask({
      id: task.id,
      title,
      description,
      priority,
      status: statusOptions.PENDING
    })
    setTitle('')
    setDescription('')
    setPriority(priorities.TOP)
    setIsEditing(null)
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
        <div className="relative p-6 w-full max-w-4xl bg-gray-300 rounded-lg shadow-lg">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <div className="flex items-center">
              <img
                className="h-20 w-auto rounded-lg mr-4"
                src="/inkwell.png"
                alt="Logo"
              />
            </div>
            <h3 className="w-full text-center text-4xl font-serif font-bold text-gray-900">
              How may I assist you with this task, sir?
            </h3>
            <button
              onClick={() => setIsEditing(null)}
              type="button"
              className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-10 h-10 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faXmark} className="h-8" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 md:p-7 space-y-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-2xl font-bold text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Buy bread"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-2xl font-bold text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Write a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-2xl font-bold text-gray-700"
              >
                Priority
              </label>
              <select
                id="countries"
                value={priority.name}
                onChange={(e) => handlePriorityChange(e.target.value)}
                className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {Object.values(priorities).map((priority) => (
                  <option key={priority.id} value={priority.name}>
                    {priority.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => setIsEditing(null)}
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
            <button
              onClick={() => handleSubmit()}
              className="text-white items-center bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FontAwesomeIcon icon={faFeatherPointed} className="mr-3 h-6" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

EditForm.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.object.isRequired
  }).isRequired,
  setIsEditing: PropTypes.func
}
export default EditForm
