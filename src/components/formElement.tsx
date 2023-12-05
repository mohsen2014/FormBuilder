import React from "react";
import { TextFieldFormElement } from "./fields/textField";

export type ElementsType = "TextField";
export type FormElement = {
    type: ElementsType,
    designerType: React.FC
    formComponent: React.FC,
    propertiesComponent: React.FC
    designerBtnElement: {
        icon: React.ReactElement,
        label: string
    } 
    construct: (id: string) =>FormElementInstance
}
type FormElementInstance = {
    Id: string,
    type: FormElement,
    extraAttr?: Record<string, any>
}
type FormElementType = {
    [key in ElementsType]: FormElement
}

export const FormElement: FormElementType = {
    TextField: TextFieldFormElement
}