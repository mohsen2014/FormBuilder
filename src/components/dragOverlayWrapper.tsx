"use client"
import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import { SidebarBtnElementDragOverlay } from './sidebarBtnElement';
import { ElementsType, FormElements } from './formElement';
import { useDesigner } from './hooks/useDesigner';

function DragOverlayWrapper() {
  const [dragItem, setDragItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragCancel: () => setDragItem(null),
    onDragStart: (e) => setDragItem(e.active),
    onDragEnd: () => setDragItem(null)
  });
  if(!dragItem) return;
  let node = <div>No drag</div>

  const isSidebarBtnElement = dragItem?.data?.current?.isDesignerBtnElement;

  if(isSidebarBtnElement) {
    const type = (dragItem?.data?.current?.type as ElementsType)
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]}/>
  }

  const isDesignerElement = dragItem?.data?.current?.isDesignerElement;
  if (isDesignerElement){
    const elementId = dragItem?.data?.current?.element?.id;
    const {element: elements} = useDesigner()
    const element = elements.find(e => e.id === elementId);
    if (!element) {
      node = <div>Element not found</div>
    } else {
      const DesignerElementComponent = FormElements[element.type].designerComponent;
      node = <div className='flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-60'>
        <DesignerElementComponent element={element}/>
      </div>
    }
  }
  return <DragOverlay>{node}</DragOverlay>
}

export default DragOverlayWrapper