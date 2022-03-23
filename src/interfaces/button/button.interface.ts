import { HtmlHTMLAttributes } from "react"
import { bgClassType, btnTypeType, sizeType } from "./button.type"

export interface ButtonPropsI {
    title: string
    action: Function
    bgClass: bgClassType
    size?: sizeType
    type?: btnTypeType
    loading?:boolean
}

