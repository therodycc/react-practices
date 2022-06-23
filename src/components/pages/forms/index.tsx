import { inputsFormPageSettings } from "../../../settings/forms-page/inputs-data-form-page";
import Button from "../../common/button";
import Form from "../../common/form";

export const HTMLForm = () => {

    const handleSubmit = (form: any) => {
        alert(JSON.stringify(form));
    };

    return (
        <div className="simple-card p-3 col-lg-6">
            <Form
                inputsData={inputsFormPageSettings}
                handleSubmit={handleSubmit}
                footerSection={
                    <div className="mt-3 col-lg-12 d-flex justify-content-end">
                        <Button
                            type="submit"
                            customClass="w-100"
                            title={"Submit"}
                            action={() => { }}
                            bgClass={"primary"} />
                    </div>
                } />
        </div >
    );
};