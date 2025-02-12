import { useState, useMemo } from 'react'
import { useTaskStore } from '../../../store/useTaskStore.js'
import DashBoardSidebar from './DashBoardSidebar'

import TaskList from './TaskList.jsx'
import TaskFilters from './TaskFilters.jsx'
import DashBoardHeader from './DashBoardHeader.jsx'

const DashBoard = () => {
  const { tasks, sort, handleSortChange, getSortedTasks } = useTaskStore()
  const [selectedPriority, setSelectedPriority] = useState('All')
  const [showCanceled, setShowCanceled] = useState(false)
  const [editingTaskId, setEditingTaskId] = useState(null)

  const sortedTasks = useMemo(() => getSortedTasks(), [tasks, sort])
  const filteredTasks = useMemo(() => {
    return sortedTasks.filter((task) =>
      showCanceled
        ? task.status === 'Canceled'
        : (selectedPriority === 'All' ||
            task.priority.name === selectedPriority) &&
          task.status !== 'Canceled'
    )
  }, [sortedTasks, selectedPriority, showCanceled])

  return (
    <div className="p-8 flex">
      <DashBoardSidebar
        onPriorityChange={setSelectedPriority}
        onCanceledChange={() => {
          showCanceled ? setShowCanceled(false) : setShowCanceled(true)
        }}
        tasks={tasks}
      />
      <div className="flex-1 px-8">
        <DashBoardHeader filteredTasks={filteredTasks} tasks={tasks} />
        <TaskFilters sort={sort} handleSortChange={handleSortChange} />
        <TaskList
          filteredTasks={filteredTasks}
          editingTaskId={editingTaskId}
          setEditingTaskId={setEditingTaskId}
        />
      </div>
    </div>
  )
}

export default DashBoard
