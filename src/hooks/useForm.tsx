import { useState } from 'react';
import { isRequired } from '../helpers/validations';
interface UseFormI {
    [key: string]: string | number | undefined | boolean
}



const useForm = (data?: UseFormI) => {
    const [form, setForm] = useState<UseFormI | any>(data || {});

    // const handleErrors = (arrayInputs: any[]) => {
    //     arrayInputs.map(item => {
    //         item.required ? isRequired(): 
    //     })
    // }


    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return [form, handleChange]
}

export default useForm