import React from 'react'
import DesignerSidebar from './designerSidebar'
import { useDroppable } from "@dnd-kit/core";
import { cn } from '@/lib/utils';
export default function Designer() {
  const droppable = useDroppable({
    id:"designer-drop-area",
    data: {
      isDesignerDropArea: true
    }
  })
  return (
    <div className='w-full h-full flex'>
        <div className="p-4 w-full">
            <div 
            ref={droppable.setNodeRef} 
            className={cn("bg-background h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 max-w-[920px]",
            droppable.isOver && "ring-2 ring-primary/20")}>
                {
                  droppable.isOver ? <div className='p-4 w-full'>
                    <div className='bg-primary/20  rounded-md h-[120px]'></div>
                  </div> : 
                  <div className='text-3xl text-muted-foreground flex flex-grow items-center font-bold'>
                    Drag Here
                  </div>
                }
            </div>
        </div>
        <DesignerSidebar/>
    </div>
  )
}
