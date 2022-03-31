interface InputPropsI {
    errorMessage: any | string;
    title?: string
    customClass?: string
    props: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({ errorMessage, customClass, title, ...props }: any) => {
    return (
        <>
            <div className="row m-1 input-group input-group-dynamic">
                {
                    title && <label htmlFor="" className="fw-bolder p-0 text-normal">{title}</label>
                }
                <input
                    className={`form-control ${customClass}`}
                    {...props}
                />
                {errorMessage && (
                    <span className="p-0 text-danger text-normal fw-bolder">
                        {errorMessage}
                    </span>
                )}
            </div>
        </>
    );
};

export default Input;
