"use client"

import { useContext } from "react"
import { DesignerContext } from "../context/designerContext"

export function useDesigner() {
    const context = useContext(DesignerContext);
    if(!context) {
        throw new Error("useDesigner must use DesignerContext");
    }
    return context;
}