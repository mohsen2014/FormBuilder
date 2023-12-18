"use client"

import React, { useState } from 'react'
import { FormElementInstance, FormElements } from './formElement'
import { useDraggable, useDroppable } from '@dnd-kit/core'
import { BiSolidTrash } from "react-icons/bi";
import { Button } from './ui/button';
import { useDesigner } from './hooks/useDesigner';
import { cn } from '@/lib/utils';
function DesignerElementWrapper({element}: {element: FormElementInstance}) {
  const {removeElement, setSelectedElement} = useDesigner()
  const [mouseOver, setMouseOver] = useState(false)
  const DesignerComponent = FormElements[element.type].designerComponent
  const topHalf = useDroppable({
    id: `${element.id}-top`,
    data: {
      type: element.type,
      id: element.id,
      isTopHalf: true
    }
  })
  const bottomHalf = useDroppable({
    id: `${element.id}-bottom`,
    data: {
      type: element.type,
      id: element.id,
      isBottomHalf: true
    }
  })
  const draggable = useDraggable({
    id: `${element.id}-drag-handler`,
    data: {
      type: element.type,
      element,
      isDesignerElement: true
    }
  })
  if(draggable.isDragging) return null;
  return (
    <div 
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      onClick={(e) => {e.stopPropagation(); setSelectedElement(element)}}
      onMouseEnter={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)}
      className={cn(`relative flex flex-col text-foreground group hover:cursor-pointer 
      rounded-md ring-1 ring-accent ring-inset`,'border-t-4 border-b-4 border-t-transparent border-b-transparent',
      topHalf.isOver && " border-t-foreground",
      bottomHalf.isOver && " border-b-foreground",)}>
        {mouseOver && (<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'>Click for properties or drag to move</div>)}
        <div ref={topHalf.setNodeRef} className="absolute w-full h-1/2 rounded-t-md"></div>
        <div className={cn('w-full flex h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none',
        mouseOver && "opacity-30",)}>
          <DesignerComponent element={element}/>
        </div>
        {mouseOver && <Button onClick={(e)=> {e.stopPropagation(); removeElement(element.id)}} variant="outline" className='absolute bg-muted right-0 h-full flex justify-center items-center border rounded-md rounded-l-none'>
          <BiSolidTrash className="h-6 w-6 text-red-500 hover:text-red-600"/>
        </Button>}
        <div ref={bottomHalf.setNodeRef} className="absolute w-full  h-1/2 rounded-b-md bottom-0"></div>
    </div>
  )
}

export default DesignerElementWrapper