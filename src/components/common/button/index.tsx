import React from 'react'
import { ButtonPropsI } from '../../../interfaces/button/button.interface'

const Button = ({ title, action, bgClass, size, type, loading, customClass }: ButtonPropsI) => {
    return (
        <>
            <button
                onClick={() => action()}
                type={type || 'button'}
                className={`btn btn-${bgClass} btn-${size && (size || '')} p-3 ${customClass}`}
            >
                {!loading ? title : (
                    <>
                        <div className="d-flex align-items-center">
                            <span className="">Please wait...</span>
                            <span className="spinner-border spinner-border-sm"></span>
                        </div>
                    </>
                )}
            </button>
        </>
    )
}

export default Button
