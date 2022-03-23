import React, { HtmlHTMLAttributes, HTMLInputTypeAttribute } from 'react'
import { bgClass, bgSize } from '../../../../interfaces/types/general.types'
interface InputPropsI  {
    bgClass: bgClass
    bgSize: bgSize
}
const Input = ({ bgClass, bgSize  }: InputPropsI) => {
    return (
        <>
            <input
                type="text"
                className='form-control' />
        </>
    )
}

export default Input