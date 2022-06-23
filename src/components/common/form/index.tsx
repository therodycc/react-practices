import { FormEvent, ReactNode } from 'react'
import useForm from '../../../hooks/useForm'
import { InputPropsI } from '../../../interfaces/input/input.interface'
import Dropdown from '../dropdown'
import Input from '../input'
interface FormPropsI {
    inputsData: Function
    handleSubmit: Function
    footerSection: ReactNode
    handleChange?: Function
}
const Form = ({ inputsData, handleSubmit, footerSection }: FormPropsI) => {

    const [form, handleChange, errors] = useForm()

    const handleSubmitAction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(form)
    }

    return (
        <>
            <form className="col-lg-12" onSubmit={handleSubmitAction} >
                <div className="row">
                    {inputsData({ form })?.map((item: InputPropsI, index: number) => (
                        <div className={`mt-3 ${item.cols}`}>
                            {item.type === "dropdown" && item.options ? (
                                <Dropdown {...item} options={item.options} value={item.value?.toString()} onChange={handleChange} />
                            ) : (<Input {...item} onChange={handleChange} />)}
                        </div>
                    ))}
                </div>
                <div className="col-lg-12">
                    {footerSection}
                </div>
            </form>
        </>
    )
}

export default Form