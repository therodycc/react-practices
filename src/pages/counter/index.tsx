import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout';
import { useCounter } from '../../hooks/useCounter';

const Counter = () => {

    const { counter, handleClick, error, elementToAnimate } = useCounter(10)

    return (
        <>
            <Layout>
                <div className="p-5">
                    <div className="row">
                        <div className="bg-white shadow-lg  rounded p-5  col-3">
                            <h2 className="text-primary" ref={elementToAnimate}> Counter {counter}</h2>
                            <div className="row mt-3">
                                <div className="col-sm-6">
                                    <button className="btn btn-danger mx-1" onClick={() => { handleClick(-1) }}>Decrement</button>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-primary mx-1" onClick={() => { handleClick(1) }}>Increment</button>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-${(counter < 10 && counter > 1) ? 'warning' : counter === 1 ? 'danger' : 'success'} shadow-lg rounded p-5 col-9 text-white`}>
                            <h4 className="fw-bolder text-white">
                                {error}
                            </h4>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Counter