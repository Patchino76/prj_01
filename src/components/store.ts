import {create } from "zustand"

export type TaskObjects = {
    taskName: string
    taskStatus: string
    tagNames: string[]
}

type tasksStore = {
    tasks: TaskObjects[]
    addTask: (task: TaskObjects) => void
    removeTask: (task: TaskObjects) => void
}

export const useTasksStore = create<tasksStore>((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),
    removeTask: (task) => set((state) => ({
        tasks: state.tasks.filter((t) => t.taskName !== task.taskName)
    }))
}))
