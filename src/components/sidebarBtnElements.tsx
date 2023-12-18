import React from 'react'
import SidebarBtnElement from './sidebarBtnElement'
import { FormElements } from './formElement'

function SidebarBtnElements() {
  return (
    <div>
        Elements
        <SidebarBtnElement formElement={FormElements.TextField}/>
    </div>
  )
}

export default SidebarBtnElements