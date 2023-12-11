"use client"

import { ReactNode, createContext, useContext, useState } from "react"
import { FormElementInstance } from "../formElement"
type AddElementType = (index: number,element: FormElementInstance) => void
type DesignerContextType = {
    element: FormElementInstance[],
    addElement: AddElementType
}

export const DesignerContext = createContext<DesignerContextType | null>(null)

export function DesignerContextProvider({children}: {children: ReactNode}) {
  const [element, setElement] = useState<FormElementInstance[]>([]);
  const addElement:AddElementType = (index, element) => {
    setElement((prev) => {
      const data = [...prev];
      data.splice(index, 0, element);
      return data
    })
  }
  return (
    <DesignerContext.Provider value={{element,addElement}}>{children}</DesignerContext.Provider>
  )
}