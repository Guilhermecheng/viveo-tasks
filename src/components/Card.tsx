import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export function Card({ data }: any) {

    return (
        <div className="w-full flex items-center justify-center gap-12">
            <span>{data.date}</span>
            <div className="w-full rounded-lg border border-zinc-300 p-10">
                {data.task}
            </div>

            <div className="flex flex-col gap-4">
            <Dialog>
                <DialogTrigger className="bg-zinc-800 text-white hover:opacity-80 p-4 rounded-lg cursor-pointer">Editar</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <Modal data={data} />
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger className="bg-zinc-800 text-white hover:opacity-80 p-4 rounded-lg cursor-pointer">Excluir</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Excluir tarefa</DialogTitle>
                    </DialogHeader>

                    <h3 className="my-4">Tem certeza de que quer excluir a tarefa?</h3>
                    <Modal data={data} mode={"delete"} />
                </DialogContent>
            </Dialog>
            </div>
        </div>
    )
}