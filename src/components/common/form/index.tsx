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
            <form onSubmit={handleSubmitAction}>
                <div className="row mt-3">
                    {inputsData({ form })?.map((item: InputPropsI, index: number) => (
                        <div
                            className={`mt-3 ${item.cols}`}>
                            {item.props.type === "dropdown" && item.options ? (
                                <Dropdown
                                    title={item.props.title}
                                    value={item.props.value?.toString()}
                                    name={item.props.name}
                                    options={item.options}
                                    onChange={handleChange}
                                />
                            ) : (
                                <Input {...item.props} {...item} onChange={handleChange} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    {footerSection}
                </div>
            </form>
        </>
    )
}

export default Form