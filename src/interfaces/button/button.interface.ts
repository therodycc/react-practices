import { HtmlHTMLAttributes } from "react"
import { bgClassType, btnTypeType, sizeType } from "./button.type"

export interface ButtonPropsI {
    title: string
    action: Function
    bgClass: bgClassType
    customClass?:string
    size?: sizeType
    type?: btnTypeType
    loading?:boolean
}

