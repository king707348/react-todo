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
import { useState, useEffect } from "react"

interface isEditData {
    isEdit: boolean;
}

interface EventData extends isEditData {
    title: {
        isEdit: boolean;
        text: string;
    }
    location: string;
    date: string;
}


export default function UseBoardGroup() {
  const [intText, setIntText] = useState("")
  const [intLocation, setIntLocation] = useState("")
  const [intDate, setIntDate] = useState("")
  const [evtList, setEvtList] = useState<EventData[]>([])

  const [isAddCard, setIsAddCard] = useState<boolean>(true)

  const AddNewCard = () => {
    const newEvent = {
        title: {
            isEdit: false,
            text: intText
        },
        location: intLocation,
        date: intDate,
    }
    setIsAddCard(!isAddCard)
    setEvtList([...evtList, newEvent])
  }

  useEffect(() => {
    console.log(evtList)
  }, [evtList])

  return (
    <div className="border rounded-md p-4 max-w-lg w-full">
        <div className="flex mb-4">
            <h2 className="my-auto mr-2">what schedule do you want to do?</h2>
            <div>
                <Button type="button" 
                    onClick={AddNewCard} 
                    className="h-auto py-1 my-auto cursor-pointer has-[>svg]:px-2 rounded-sm"
                >
                    <Plus size={16} />
                </Button>
            </div>
        </div>
        <div>
            {evtList.map((item, idx) => {
                return <Card key={idx} className="w-full max-w-md p-2 mt-4 border border-2">
                    <CardContent className="flex flex-col">
                        <div>
                            <Input 
                                type="text" 
                                className="max-w-44 text-sm h-6" 
                                placeholder="Type your task here?" 
                                value={intText} 
                                onChange={(e) => setIntText(e.target.value)} 
                            />
                            <div 
                                className="text-sm " 
                                onClick={(e) => {e.preventDefault(); item.title.isEdit = true; console.log("clicked")}}
                            >
                                {item.title.text}
                            </div>
                        </div>
                      <Input 
                        type="text"
                        className="max-w-44 mt-2 text-sm h-6"
                        placeholder="Location"
                        value={intLocation}
                        onChange={(e) => setIntLocation(e.target.value)}
                      />
                      <Input 
                        type="date"
                        className="max-w-44 mt-2 text-sm h-6"
                        placeholder="Date"
                        value={intDate}
                        onChange={(e) => setIntDate(e.target.value)}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button className="text-sm mr-2">edit</Button>
                        <Button className="text-sm" >Delete</Button>
                    </CardFooter>
                </Card>
            })}
        </div>
        <Button onClick={AddNewCard} className='mt-2'>+ New Card</Button>
    </div>
  )
}