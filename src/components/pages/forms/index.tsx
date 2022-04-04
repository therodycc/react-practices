import Link from "next/link";
import { FormEvent, useState } from "react";
import { isRequired } from "../../../helpers/validations";
import Input from "./input";


export const HTMLForm = () => {
    console.log("renders");
    // errors
    const [errName, setErrName] = useState<string>('');
    const [errLastName, setErrLastName] = useState<string>('');
    const [errEmail, setErrEmail] = useState<string>('');

    const [form, setForm] = useState<any>({
        name: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const errorName = isRequired(form.name, 'Name is required', setErrName)
        const errorLastName = isRequired(form.lastName, 'Last Name is required', setErrLastName)
        const errorEmail = isRequired(form.email, 'Email is required', setErrEmail)
        if (
            errorName
            || errorLastName || errorEmail
        ) {
            return
        }
        alert(JSON.stringify(form))
    }


    return (
        <div className="p-5">
            <form action="" onSubmit={handleSubmit} className="bg-white col-lg-6 p-3 px-5 shadow-lg rounded">
                <div className="row">
                    <div className="col-lg-6">
                        <Input
                            title="Name"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={form.name}
                            errorMessage={errName}
                        />
                    </div>
                    <div className="col-lg-6">
                        <Input
                            title="Last Name"
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={form.lastName}
                            errorMessage={errLastName}
                        />
                    </div>
                    <div className="col-lg-12">
                        <Input
                            title="Email"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={form.email}
                            errorMessage={errEmail}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </div>
    )
}