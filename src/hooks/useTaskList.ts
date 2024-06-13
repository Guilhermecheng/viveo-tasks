import { create } from "zustand";

interface TaskProps {
    id: string;
    title: string;
    date: string;
    status: string;
}

interface TaskListProps {
    taskList: TaskProps[];

    createTask: (task: TaskProps) => void;
    editTask: (task: TaskProps) => void;
    deleteTask: (id: string) => void;
}

export const useTaskList = create<TaskListProps>((set, get) => ({
    taskList: [],

    createTask: (task) => set((state) => ({ taskList: [...state.taskList, task] })),
    editTask: (task) => {
        set((state) => ({
            taskList: state.taskList.map((taskFromState) => taskFromState.id === task.id ? ({ ...task }) : ({ ...taskFromState }))
        }))
    },
    deleteTask: (id) => set((state) => ({ taskList: state.taskList.filter((x) => x.id !== id) }))
}))