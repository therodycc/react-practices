import React from 'react';
import LoadingLine from '../../../components/common/loading/loading-line';
import Layout from '../../../components/layout';

const CreateTicket = () => {
    return <>
        <Layout>
            <div className='col-lg-12 d-flex justify-content-center align-item-center'>
                <div>
                    <LoadingLine />
                    <button className='btn btn-success p-3'>Generate new ticket</button>
                </div>
            </div>
        </Layout>
    </>;
};

export default CreateTicket;
