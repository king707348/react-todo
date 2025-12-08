"use client"

import { useState, Dispatch, SetStateAction } from "react"
import { ChevronDownIcon } from 'lucide-react';

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface EventData {
    id: number;
    title: string;
    location: string;
    date: string;
    isEdit: boolean;
}

interface ChildProps {
  item: EventData,
  itemType: keyof EventData,
  setEvtList: Dispatch<SetStateAction<EventData[]>>
}

export default function Calendar22({item, itemType, setEvtList}: ChildProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-44 h-6 text-sm justify-between"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setOpen(false)  
              setDate(date)
    
              console.log(itemType, item )

              setEvtList(prev => prev.map(setItem => {
                console.log(setItem.id, item.id)
                if(setItem.id == item.id){
                  return {
                    ...item,
                    date: date.toLocaleDateString()
                  }
                }

                return setItem
              }))
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

