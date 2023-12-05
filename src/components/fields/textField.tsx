"use client"
import { ElementsType, FormElement } from "../formElement";

const type: ElementsType = "TextField";
export const TextFieldFormElement: FormElement = {
    type,
    designerType: () => <div></div>,
    formComponent: () => <div></div>,
    propertiesComponent: () => <div></div>,
    designerBtnElement: {
        icon: <></>,
        label: ""
    },
    construct: function (id: string): { Id: string; type: FormElement; extraAttr?: Record<string, any> | undefined; } {
        throw new Error("Function not implemented.");
    }
}