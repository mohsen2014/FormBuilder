"use client"
import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance } from "../formElement";

const type: ElementsType = "TextField";
export const TextFieldFormElement: FormElement = {
    type,
    designerComponent: DesignerComponent,
    formComponent: () => <div></div>,
    propertiesComponent: () => <div></div>,
    designerBtnElement: {
        icon: MdTextFields,
        label: "Text Field"
    },
    constructor: function (id: string): FormElementInstance{
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

function DesignerComponent({element}: {element: FormElementInstance}) {
  return (
    <div className="">{element?.extraAttr?.label}</div>
  )
}
