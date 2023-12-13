"use client"
import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance } from "../formElement";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";
const extraAttr = {
    label: "Text field",
    helperText: "Text field",
    required: false,
    placeholder: "text"
};
type ExtraAttrType = typeof extraAttr
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
            extraAttr: extraAttr,
        };
    },
}

function DesignerComponent({element}: {element: FormElementInstance & {extraAttr: ExtraAttrType}}) {
    const {helperText,label,placeholder,required} = element.extraAttr
    return (
    <div className="flex flex-col gap-2 w-full">
        <Label className="text-muted-foreground">{label}{required && '*'}</Label>
        <Input readOnly disabled className="w-full" placeholder={placeholder}></Input>
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
    </div>
  )
}
