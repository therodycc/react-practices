import React, { useState } from 'react'
import Button from '../../components/common/button'
import Modal from '../../components/common/modal/modal'
import Layout from '../../components/layout';

const ModalPage = () => {
    const [showModalBasic, setShowModalBasic] = useState(false);
    return (
        <>
            <Layout>
                <div className="m-5">
                    <Button title={'Show basic modal'} action={() => { setShowModalBasic(true) }} bgClass={'primary'}  />
                </div>

                {showModalBasic &&
                    <Modal active={true} toggle={setShowModalBasic} >
                        <div className="p-5 bg-light ">
                            <h3 className="text-primary">Modal</h3>
                            <span className="fw-bolder text-dark">New modal</span>
                        </div>
                    </Modal>
                }
            </Layout>
        </>
    )
}

export default ModalPage