"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import { FormElementInstance } from "../formElement"
type AddElementType = (index: number,element: FormElementInstance) => void
type DesignerContextType = {
    element: FormElementInstance[],
    addElement: AddElementType,
    removeElement: (id: string) => void,
    selectedElement: FormElementInstance | null,
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>
}

export const DesignerContext = createContext<DesignerContextType | null>(null)

export function DesignerContextProvider({children}: {children: ReactNode}) {
  const [element, setElement] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);
  const addElement:AddElementType = (index, element) => {
    setElement((prev) => {
      const data = [...prev];
      data.splice(index, 0, element);
      return data
    })
  }
  const removeElement = (id: string) => setElement((prev) => prev.filter(p => p.id !== id));
  return (
    <DesignerContext.Provider value={{element,addElement, removeElement, selectedElement, setSelectedElement}}>{children}</DesignerContext.Provider>
  )
}