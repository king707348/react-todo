"use client"

import { Input } from "@/components/ui/input"

interface ChildProps {
    item: EventData[],
    setEvtList: React.Dispatch<React.SetStateAction<EventData[]>>,
    showKey: string
}

export default function EditToggle({item, setEvtList, showKey}: ChildProps) {
    const setType = showKey =="date" ? "date": "text"

    const EditContent = (id: number, newString: string) => {
        setEvtList(prev => prev.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    [showKey as keyof EventData]: newString
                }
            }

            return item
        }))
    }
    return (<>
        { item.isEdit ?
            <Input 
                type={setType} 
                className="max-w-44 text-sm h-6 mb-2" 
                placeholder={showKey == "location" ? "location" : "Type your task here?" }
                value={item[showKey]}
                onChange={(e) => EditContent(item.id, e.target.value)}
            />
        : <div className="mb-2">{item[showKey]}</div>
        }
    </>)
}