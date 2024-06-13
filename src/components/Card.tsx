import { Modal } from "./Modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export function Card({ data }: any) {

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <span>{data.date}</span>
            <div className="w-full rounded-lg border border-zinc-300 py-6 px-8 md:p-12 grid gap-4 grid-cols-1 md:grid-cols-2">
                <span className="text-lg font-semibold">{data.title}</span>

                <span className="md:text-end">{data.status}</span>
            </div>

            <div className="flex flex-row md:flex-col gap-4 w-full md:w-auto">
                <Dialog>
                    <DialogTrigger className="bg-zinc-800 text-white hover:opacity-80 p-4 w-full rounded-lg cursor-pointer">Editar</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Editar tarefa</DialogTitle>
                        </DialogHeader>
                        <Modal data={data} mode="edit" />
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger className="bg-zinc-800 text-white hover:opacity-80 p-4 w-full rounded-lg cursor-pointer">Excluir</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Excluir tarefa</DialogTitle>
                        </DialogHeader>

                        <h3 className="my-4">Tem certeza de que quer excluir a tarefa?</h3>
                        <Modal data={data} mode="delete" />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}