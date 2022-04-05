import React from 'react'
import { useCounter } from '../../../../hooks/useCounter'

const counterHook = () => {
    const { counter, handleClick, error, elementToAnimate } = useCounter(10, 1)

    return (
        <>
            <div className="row">
                <h4 className="text-info bg-white shadow-lg p-4">Counter done with useCounter hook</h4>
                <div className="bg-white shadow-lg  rounded p-5  col-lg-4">
                    <h2 className="text-primary" ref={elementToAnimate}> Counter {counter}</h2>
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <button className="btn btn-danger w-100 fw-bolder" onClick={() => { handleClick(-1) }}>-</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-primary w-100 fw-bolder" onClick={() => { handleClick(1) }}>+</button>
                        </div>
                    </div>
                </div>
                <div className={`bg-${(counter < 10 && counter > 1) ? 'warning' : counter === 1 ? 'danger' : 'success'} shadow-lg rounded p-5 col-lg-8 text-white`}>
                    <h4 className="fw-bolder text-white">
                        {error}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default counterHook