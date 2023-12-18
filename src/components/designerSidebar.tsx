import React from 'react'
import { FormElements } from './formElement'
import SidebarBtnElement from './sidebarBtnElement'
import { useDesigner } from './hooks/useDesigner'
import SidebarBtnElements from './sidebarBtnElements';

export default function DesignerSidebar() {
  const {selectedElement} = useDesigner();
  return (
    <aside className='max-w-[400px] w-[400px] flex flex-col 
    overflow-y-auto flex-grow gap-2 border-l-2 border-muted p-2 bg-background h-full'>
      {selectedElement ? <SidebarBtnElements /> : }
    </aside>
  )
}
