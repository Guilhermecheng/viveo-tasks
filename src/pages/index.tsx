import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Modal } from "@/components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTaskList } from "@/hooks/useTaskList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { taskList } = useTaskList()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 ${inter.className} bg-zinc-200`}
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-8">
        <div className="w-full text-2xl font-semibold text-center">App Organizador</div>

        <Dialog>
          <DialogTrigger className="bg-zinc-800 text-white p-4 rounded-lg cursor-pointer hover:opacity-80">Nova tarefa +</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova tarefa</DialogTitle>
            </DialogHeader>
            <Modal mode="create" />
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-1 gap-8 w-full ">
          { taskList.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center">Nenhuma tarefa cadastrada</div>
          ) : (
            <>
              { taskList.map((task: any, i: number) => {

                return (
                  <Card data={task} key={i} />
                )
                })  
              }
            </>
          ) }
        </div>

      </div>
    </main>
  );
}
