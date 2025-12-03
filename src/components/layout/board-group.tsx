"use client"

import { Plus } from 'lucide-react';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState, useEffect, useContext } from "react"

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

    setEvtList([...evtList, newEvent])
  }

  const UseEditToggle = (id: number) => {
    setEvtList(prev => prev.map(item => {
        if(item.id === id){
            return {
                ...item,
                isEdit: !item.isEdit
            }
        }

        return item
    }))
  }

  const UseDelete = (id: number) => {
    setEvtList(prev => prev.filter(i => i.id !== id))
  }

  useEffect(() => {
    console.log("ev",evtList)
  }, [evtList])

  return (
    <div className="border rounded-md p-4 max-w-lg w-full">
        <div className="flex mb-4">
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
        <div>
            {evtList.map((item, idx) => {
                return <Card key={idx} className="w-full max-w-md p-2 mt-4 border border-2">
                    <CardContent className="flex flex-col">
                        <EditToggle item={item} setEvtList={setEvtList} showKey="title" />
                        <EditToggle item={item} setEvtList={setEvtList} showKey="location" />
                        <EditToggle item={item} setEvtList={setEvtList} showKey="date" />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button className="text-sm mr-2" onClick={() => UseEditToggle(item.id)}>edit</Button>
                        <Button className="text-sm" onClick={() => UseDelete(item.id)}>Delete</Button>
                    </CardFooter>
                </Card>
            })}
        </div>
        <Button onClick={AddNewCard} className='mt-2'>+ New Card</Button>
    </div>
  )
}