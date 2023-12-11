import React from 'react'
import { FormElementInstance, FormElements } from './formElement'

function DesignerElementWrapper({element}: {element: FormElementInstance}) {
  const DesignerComponent = FormElements[element.type].designerComponent
  return (
    <DesignerComponent element={element}/>
  )
}

export default DesignerElementWrapper