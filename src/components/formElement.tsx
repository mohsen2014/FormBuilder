import React from "react";
import { TextFieldFormElement } from "./fields/textField";

export type ElementsType = "TextField";
export type FormElement = {
    type: ElementsType,
    designerComponent: React.FC<{element: FormElementInstance}>
    formComponent: React.FC,
    propertiesComponent: React.FC
    designerBtnElement: {
        icon: React.ElementType,
        label: string
    } 
    constructor: (id: string) => FormElementInstance
}
export type FormElementInstance = {
    id: string,
    type: ElementsType,
    extraAttr?: Record<string, any>
}
type FormElementType = {
    [key in ElementsType]: FormElement
}

export const FormElements: FormElementType = {
    TextField: TextFieldFormElement
}