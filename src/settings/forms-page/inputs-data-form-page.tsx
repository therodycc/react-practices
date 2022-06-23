import { InputPropsI } from "../../interfaces/input/input.interface";

export const inputsFormPageSettings = ({ form }: { form: any }): InputPropsI[] => {
    return [
        {
            title: "First Name",
            error: {
                textError: "First Name is required"
            },
            cols: "col-md-6",
            type: "text",
            name: "firstName",
            defaultValue: form?.firstName,
            placeholder: "Enter your first name",
        },
        {
            title: "Last Name",
            errorMessage: "",
            cols: "col-md-6",
            type: "text",
            name: "lastName",
            defaultValue: form?.lastName,
            placeholder: "Enter your last name",
        },
        {
            title: "Email",
            errorMessage: "",
            cols: "col-md-6",
            type: "text",
            name: "email",
            defaultValue: form?.email,
            placeholder: "Enter your email",
        },
    ]
}