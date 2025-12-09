"use client"

import { useState, useEffect } from "react"
import { Plus, SquarePen, Trash2 } from 'lucide-react';

import { DndContext, useDroppable, useDraggable } from '@dnd-kit/core';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,   
  TooltipTrigger,
} from "@/components/ui/tooltip"

import EditToggle from "@/components/layout/edit-toggle"

interface isEditData {
    isEdit: boolean;
}

interface EventData extends isEditData {
    title: string;
    location: string;
    date: string;
    id: number;
}

export default function UseBoardGroup() {
  const [evtList, setEvtList] = useState<EventData[]>([])

  const AddNewCard = () => {
    const newEvent = {
        title: "",
        location: "",
        date: "",
        id: Date.now(),
        isEdit: true
    }
    // 新增前先關閉其他的
    const resEvtList = evtList.map(item => ({
       ...item ,
       isEdit: false
    }))

    setEvtList([...resEvtList , newEvent])
  }

  const UseEditToggle = (id: number) => {
    setEvtList(prev => prev.map(item => {
        if(item.id === id){
            return {
                ...item,
                isEdit: !item.isEdit
            }
        }else{
            // 新增前先關閉其他的
            return {
                ...item ,
                isEdit: false
            }
        }
    }))
  }
  // 刪除後，重置編輯狀態
  const UseDelete = (id: number) => {
    setEvtList(prev => {
        const updateList = prev.filter(i => i.id !== id)
        
        return updateList.map(item => ({
            ...item,
            isEdit: false
        }))
    })
  }
  // 監聽 evtList
  useEffect(() => {
    console.log("list",evtList)
  }, [evtList])

  return (
    <div className="border rounded-md p-4 max-w-lg w-full m-auto">
        <div className="flex justify-between mb-4">
            <h2 className="my-auto mr-2">what schedule do you want to do?</h2>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button type="button" 
                        onClick={AddNewCard} 
                        className="h-auto py-1 my-auto cursor-pointer has-[>svg]:px-2 rounded-sm"
                    >
                        <Plus size={16} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add New Card</p>
                </TooltipContent>
            </Tooltip>
        </div>
        <DndContext>
            {evtList.map((item, idx) => {
                return <Card key={idx} className="w-full max-w-md p-2 mt-4 border border-2">
                    <CardContent className="flex justify-between px-0">
                        <div className="flex flex-col my-auto">
                            <EditToggle item={item} setEvtList={setEvtList} showKey="title" />
                            <EditToggle item={item} setEvtList={setEvtList} showKey="location" />
                            <EditToggle item={item} setEvtList={setEvtList} showKey="date" />
                        </div>
                        <div className="flex">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button 
                                        className="h-fit text-sm mr-2 has-[>svg]:px-2 cursor-pointer" 
                                        onClick={() => UseEditToggle(item.id)}
                                    >
                                        <SquarePen className="size-3" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Edit
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button 
                                        className="h-fit text-sm has-[>svg]:px-2 cursor-pointer" 
                                        onClick={() => UseDelete(item.id)}
                                    >
                                        <Trash2 className="size-3" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Delete
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </CardContent>
                </Card>
            })}

            
        </DndContext>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={AddNewCard} className="mt-2 p-2 cursor-pointer">
                    <Plus size={12} />
                    New Card
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add New Card</p>
            </TooltipContent>
        </Tooltip>
    </div>
  )
}