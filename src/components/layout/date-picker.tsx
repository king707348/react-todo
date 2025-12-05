"use client"

import * as React from "react"
import { ChevronDownIcon } from 'lucide-react';

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ChildProps {
    itemShowKey: string,
    setEvtList: React.Dispatch<React.SetStateAction<EventData[]>>,
}

export default function Calendar22({itemShowKey, setEvtList}: ChildProps) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
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
              setDate(date)
              setOpen(false)
              itemShowKey["date"]=date.toLocaleDateString()
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

