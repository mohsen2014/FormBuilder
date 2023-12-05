"use client"
import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import { SidebarBtnElementDragOverlay } from './sidebarBtnElement';
import { ElementsType, FormElement } from './formElement';

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
    node = <SidebarBtnElementDragOverlay formElement={FormElement[type]}/>
  }
  return <DragOverlay>{node}</DragOverlay>
}

export default DragOverlayWrapper