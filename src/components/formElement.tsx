import React from "react";
import { TextFieldFormElement } from "./fields/textField";

export type ElementsType = "TextField";
export type FormElement = {
    type: ElementsType,
    designerType: React.FC
    formComponent: React.FC,
    propertiesComponent: React.FC
    designerBtnElement: {
        icon: React.ElementType,
        label: string
    } 
    construct: (id: string) => FormElementInstance
}
export type FormElementInstance = {
    id: string,
    type: ElementsType,
    extraAttr?: Record<string, any>
}
type FormElementType = {
    [key in ElementsType]: FormElement
}

export const FormElement: FormElementType = {
    TextField: TextFieldFormElement
}