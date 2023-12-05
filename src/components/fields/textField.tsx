"use client"
import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance } from "../formElement";

const type: ElementsType = "TextField";
export const TextFieldFormElement: FormElement = {
    type,
    designerType: () => <div></div>,
    formComponent: () => <div></div>,
    propertiesComponent: () => <div></div>,
    designerBtnElement: {
        icon: MdTextFields,
        label: "Text Field"
    },
    construct: function (id: string): FormElementInstance{
        return {
            id,
            type,
            extraAttr: {
                label: "Text field",
                helperText: "Text field",
                required: false,
                placeholder: "text"
            },
        };
    },
}