import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useTaskList } from "@/hooks/useTaskList";

interface ModalProps {
    mode: "create" | "edit" | "delete",
    data?: any;
}

export function Modal({ mode, data }: ModalProps) {
    const { createTask, deleteTask } = useTaskList()
    const [task, setTask] = useState({
        title: "",
        date: "",
        status: "",
    })

    function saveModification() {
        if(mode === "create") {
            createTask({
                id: String(Math.random()),
                ...task
            })
        }

        if(mode === "delete" && data) {
            deleteTask(data.id)
        }
    }
    console.log(data)

    useEffect(() => {
        if(data) {
            setTask({
                title: data.title,
                date: data.date,
                status: data.status
            })
        }
    }, [])

    return (
        <div className="w-full flex flex-col gap-4">
            <Input 
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                disabled={mode === "delete"}
            />
            <Select 
                value={task.status} 
                disabled={mode === "delete"}
                onValueChange={(value) => setTask({ ...task, status: value })}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="backlog">Backlog</SelectItem>
                    <SelectItem value="to-do">To do</SelectItem>
                    <SelectItem value="doing">Doing</SelectItem>
                    <SelectItem value="homolog">Homolog</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                </SelectContent>
            </Select>

            <Input
                value={task.date}
                type="date" 
                disabled={mode === "delete"}
                onChange={(e) => setTask({ ...task, date: e.target.value })}
            />
            
            <Button
                variant={mode === "delete" ? "destructive" : "secondary"}
                onClick={saveModification}
            >
                {mode === "delete" ? "Deletar" : "Salvar"}
            </Button>
        </div>
    )
}