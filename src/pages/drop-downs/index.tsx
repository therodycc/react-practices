import { FormEvent, useState } from "react";
import Button from "../../components/common/button";
import Dropdown from "../../components/common/dropdown";
import Layout from "../../components/layout";

const DropDownPage = () => {
    const [form, setForm] = useState({});
    const options = [
        {
            title: "Option 1",
            value: "1",
        },
        {
            title: "Option 2",
            value: "2",
        },
        {
            title: "Option 3",
            value: "3",
        },
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({ form });
    };

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <Dropdown
                        options={options}
                        onChange={handleChange}
                        name='test1'
                    />
                    <Button title="Submit" bgClass="success" type="submit" action={() => { }} />
                </form>
            </Layout>
        </>
    );
};

export default DropDownPage;
