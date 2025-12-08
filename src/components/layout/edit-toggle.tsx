"use client"

import { Dispatch, SetStateAction } from "react"
import { Input } from "@/components/ui/input"

import Calendar22 from "@/components/layout/date-picker"

export interface EventData {
    id: number;
    title: string;
    location: string;
    date: string;
    isEdit: boolean;
}

interface ChildProps {
    item: EventData,
    setEvtList: Dispatch<SetStateAction<EventData[]>>,
    showKey: keyof EventData
}

export default function EditToggle({item, setEvtList, showKey}: ChildProps) {
    const setType = showKey =="date" ? "date": "text"

    const EditContent = (id: number, newString: string) => {
        setEvtList(prev => prev.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    [showKey]: newString
                }
            }
            return item
        }))
    }
    return (<>
        { item.isEdit ?
            setType == "date" ?
            <Calendar22 
                item={item}
                setEvtList={setEvtList}
            />
            :<Input 
                type={setType} 
                className="max-w-44 text-sm h-6 mb-2" 
                placeholder={showKey == "location" ? "location" : "Type your task here?" }
                value={item[showKey] as string}
                onChange={(e) => EditContent(item.id, e.target.value)}
            />
            :<div className={item[showKey] !== "" ? "mb-2" : ""}>
                {showKey !== "title" ? item[showKey] : item[showKey] ? item[showKey] : "New Card"}
            </div>
            
        }
    </>)
}