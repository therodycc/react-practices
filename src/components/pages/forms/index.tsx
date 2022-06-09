import { inputsFormPageSettings } from "../../../settings/forms-page/inputs-data-form-page";
import Form from "../../common/form";

export const HTMLForm = () => {

    const handleSubmit = (form: any) => {
        alert(JSON.stringify(form));
    };

    return (
        <div className="card p-3">
            <Form
                inputsData={inputsFormPageSettings}
                handleSubmit={handleSubmit}
                footerSection={<>
                    <div className="row mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </>} />
        </div >
    );
};