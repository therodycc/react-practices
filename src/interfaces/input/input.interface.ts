import { OptionsDropdownI } from "../dropdown/dropdown.interface";

export interface InputPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: any
    errorMessage?: any | string;
    title?: string
    customClass?: string
    cols?: string
    options?: OptionsDropdownI[]
}
