import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout';

const MAXIMUM_COUNTER = 10;
const MINIMUM_COUNTER = 0;

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (counter < 10) return setError('We need to count to 10');
        setError('We reached the maximum counter value');
    }, [counter]);

    const handleClick = (num: number) => {
        setCounter(prev => Math.min(prev + num, MAXIMUM_COUNTER));
    }

    return (
        <>
            <Layout>
                <div className="p-5">
                    <div className="row">
                        <div className="bg-white shadow-lg  rounded p-5  col-3">
                            <h2 className="text-primary">Counter {counter}</h2>
                            <div className="row mt-3">
                                <div className="col-sm-6">
                                    <button className="btn btn-danger mx-1" onClick={() => { handleClick(-1) }}>Decrement</button>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-primary mx-1" onClick={() => { handleClick(1) }}>Increment</button>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-${counter < 10 ? 'success' : 'danger'} shadow-lg rounded p-5 col-9 text-white`}>{error}</div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Counter