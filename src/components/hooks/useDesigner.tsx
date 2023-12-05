"use client"

import { useContext } from "react"
import { DesignerContext } from "../context/designerContext"

function useDesigner() {
    const context = useContext(DesignerContext);
    if(!context) {
        throw new Error("useDesigner must use DesignerContext");
    }
    return DesignerContext;
}