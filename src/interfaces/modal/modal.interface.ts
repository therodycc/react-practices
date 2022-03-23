import { ReactNode } from "react"

export interface ModalI {
    active: boolean
    toggle: Function
    children: ReactNode
    header?: any
    width?: string
}