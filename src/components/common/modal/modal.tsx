import React, { useState } from "react";
import { ModalI } from "../../../interfaces/modal/modal.interface";

const Modal = ({ active, children, toggle, header, width = "mw-1000px" }: ModalI) => {

    const [animation, setAnimation] = useState(false);

    return (
        <>
            <div
                className={`${active && "modal show"}  animate__fadeOut`}
                style={{ display: "block", zIndex: 1000 }}
            >

                <div
                    onClick={() => {
                        setAnimation(true)
                        setTimeout(() => {
                            toggle()
                        }, 700);
                    }}
                    style={{
                        background: "#00000075",
                        height: "100vh",
                        zIndex: -1,
                        position: "fixed",
                        width: "100%",
                    }}
                />

                <div
                    className={`modal-dialog modal-dialog-centered ${width}  animate__animated  ${active && 'animate__fadeInDown'} ${animation && ' animate__fadeOutUp'}`}
                    style={{ animationDuration: '1s'}}
                >
                    <div className="modal-content rounded p-1">
                        <div className="modal-header pb-2">
                            <div className="mx-8">
                                {typeof header == 'function' ?
                                    header() : <h3 className="fw-bolder">{header}</h3>}
                            </div>
                            <div
                                className="mb-2"
                            >
                                <button onClick={() => {
                                    setAnimation(true)
                                    setTimeout(() => {
                                        toggle()
                                    }, 700);
                                }} className="close m-0"

                                >

                                    <span aria-hidden="true" style={{ position: "absolute", top: "8px", right: "15px" }}>
                                        x
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15"
                            style={{ overflow: 'visible' }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
