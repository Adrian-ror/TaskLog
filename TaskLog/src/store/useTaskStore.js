import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useTaskStore = create(
  devtools(
    persist(
      (set, get) => {
        return {
          identifier: 0,
          tasks: [],
          sort: 'ASC',
          addTask: (task) => {
            set(
              (state) => {
                const updatedTasks = [
                  ...state.tasks,
                  { ...task, id: state.identifier }
                ]
                updatedTasks.sort((a, b) => a.priority.index - b.priority.index)
                return { tasks: updatedTasks, identifier: state.identifier + 1 }
              },
              false,
              'AddTask'
            )
          },
          updateTask: (updatedTask) => {
            set(
              (state) => {
                const newTasks = state.tasks.map((task) =>
                  task.id === updatedTask.id
                    ? { ...task, ...updatedTask }
                    : task
                )
                return { tasks: newTasks }
              },
              false,
              'UpdateTask'
            )
          },
          filterTasksByPriority: (priorityLevel) => {
            return get()
              .tasks.filter((task) => task.priority.index === priorityLevel)
              .sort((a, b) => a.title.localeCompare(b.title))
          },
          handleSortChange: () => {
            set(
              (state) => ({
                sort: state.sort === 'ASC' ? 'DESC' : 'ASC'
              }),
              false,
              'SetSort'
            )
          },
          getSortedTasks: () => {
            const tasks = [...get().tasks]

            switch (get().sort) {
              case 'ASC':
                return tasks.sort((a, b) => a.title.localeCompare(b.title))
              case 'DESC':
                return tasks.sort((a, b) => b.title.localeCompare(a.title))
              default:
                return tasks.sort((a, b) => a.priority.index - b.priority.index)
            }
          },
          clearCanceledTasks: () => {
            set(
              (state) => ({
                tasks: state.tasks.filter((task) => task.status !== 'Canceled')
              }),
              false,
              'ClearCanceledTasks'
            )
          }
        }
      },
      {
        name: 'task-store'
      }
    )
  )
)
