"use client"

import React, { useContext, useEffect } from 'react'
import DesignerSidebar from './designerSidebar'
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn } from '@/lib/utils';
import { useDesigner } from './hooks/useDesigner';
import {  FormElements, ElementsType } from './formElement';
import { v4 as uuidv4 } from 'uuid';
import DesignerElementWrapper from './designerElementWrapper';
export default function Designer() {
  const {element, addElement, setSelectedElement, selectedElement} = useDesigner()
  const droppable = useDroppable({
    id:"designer-drop-area",
    data: {
      isDesignerDropArea: true
    }
  });
  useDndMonitor({
    onDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        if (!active || !over) {
          return 
        }
        const isDesignerBtnElement = active?.data?.current?.isDesignerBtnElement;
        if(isDesignerBtnElement ){
          const type = active?.data?.current?.type as ElementsType;
          const newElement = FormElements[type].constructor(uuidv4())
          addElement(0, newElement)
        }
    },
  });

  return (
    <div className='w-full h-full flex'>
        <div className="p-4 w-full" onClick={() => {
          if(selectedElement) {
            setSelectedElement(null)
          }
        }}>
            <div 
            ref={droppable.setNodeRef} 
            className={cn("bg-background h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 max-w-[920px]",
            droppable.isOver && "ring-2 ring-primary/20")}>
                {
                  element.length > 0 && (<div className='flex flex-col text-background w-full gap-2 p-4'>
                    {element.map(elem => (<DesignerElementWrapper key={elem.id} element={elem}/>))}
                  </div>)
                }
                {
                  droppable.isOver  && (placeholder()) 
                }
                { 
                  !droppable.isOver && element?.length === 0 && <div className='text-3xl text-muted-foreground flex flex-grow items-center font-bold'>
                    Drag Here
                  </div>
                } 
            </div>
        </div>
        <DesignerSidebar/>
    </div>
  )
}

function placeholder(): React.ReactNode {
  return <div className='p-4 w-full'>
    <div className='bg-primary/20  rounded-md h-[120px]'></div>
  </div>;
}
