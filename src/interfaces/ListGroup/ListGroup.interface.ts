import { ReactNode } from "react";

export interface ListGroupPropsI {
    items: ItemsListGroups[]
    action?:Function
    withCheck:boolean
}

interface ItemsListGroups{
    id:string
    title:string
    active:boolean
}