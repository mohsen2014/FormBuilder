import React from 'react'
import { FormElements } from './formElement'
import SidebarBtnElement from './sidebarBtnElement'

export default function DesignerSidebar() {

  return (
    <aside className='max-w-[400px] w-[400px] flex flex-col overflow-y-auto flex-grow gap-2 border-l-2 border-muted p-2 bg-background h-full'>
      <SidebarBtnElement formElement={FormElements.TextField}/>
    </aside>
  )
}
