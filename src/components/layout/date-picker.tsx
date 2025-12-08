"use client"

import { useState, Dispatch, SetStateAction, useEffect } from "react"
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
  setEvtList: Dispatch<SetStateAction<EventData[]>>
}

export default function Calendar22({item, setEvtList}: ChildProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const defaultDate = item.date ? item.date : "Select date"
  
  const Selected = (date: Date) => {
    setOpen(false)  
    setDate(date)

    setEvtList(prev => prev.map(setItem => {
      if(setItem.id == item.id){
        return {
          ...setItem,
          date: date.toLocaleDateString()
        }
      }

      return setItem
    }))
  }

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-44 h-6 text-sm justify-between"
          >
            {defaultDate}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={Selected}
            required={true}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

