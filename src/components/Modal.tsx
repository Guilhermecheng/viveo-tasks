import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar } from "@/components/ui/calendar"
import axios from "axios";

interface ModalProps {
    data: any;
    mode: "create" | "edit" | "delete"
}

export function Modal({ data = { task: "", date: "" }, mode = "create" }: any) {
    const [task, setTask] = useState({
        task: "",
        date: "",
    })

    function saveTask() {
        console.log(task)
        axios.post('', {
            task
        })
    }

    const handleChange = (e: any) => {
    const { name, value } = e.target

        if(mode === "create") {
            setTask({ ...task, [name]: value })
        }
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <Input 
                value={task.task}
                onChange={(e) => setTask({ ...task, task: e.target.value })}
                disabled={mode === "delete"}
            />
            <Input
                value={task.date}
                onChange={(e) => setTask({ ...task,  date: e.target.value })}
                type="date" 
                disabled={mode === "delete"}
            />
            
            <Button
                variant={mode === "delete" ? "destructive" : "secondary"}
                onClick={saveTask}
            >
                {mode === "delete" ? "Deletar" : "Salvar"}
            </Button>
        </div>
    )
}