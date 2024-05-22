import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

export const useTaskStore = create(devtools(persist((set,get) => {

    return {
        identifier: 0,
        tasks: [],
        addTask: (task) => {
            set((state) => {
                const updatedTasks = [...state.tasks, { ...task, id: state.identifier }];
                updatedTasks.sort((a, b) => a.priority.index - b.priority.index);
                return { tasks: updatedTasks, identifier: state.identifier + 1 };
            }, false, 'AddTask');
        },
        updateTask: (updatedTask) => {
            set((state) => {
                const tasks = state.tasks.map((task) =>
                    task.id === updatedTask.id ? { ...task, ...updatedTask } : task
                );
                return { tasks };
            }, false, 'UpdateTask');
        },
        filterTasksByStatus: (status) => {
            return get().tasks
                .filter(task => task.status === status)
                .sort((a, b) => a.priority.index - b.priority.index);
        },
        clearAllTasks: () => {
            set({ tasks: [] }, false, 'ClearAllTasks');
        }
    };
},{
    name: 'task-store'
})));