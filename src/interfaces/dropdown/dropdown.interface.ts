export interface DropDownPropsI {
    title?: string
    name?: string
    value?: string | number
    type?: string
    onChange: Function
    options: OptionsDropdownI[]
}


export interface OptionsDropdownI {
    title: string
    value: string
}