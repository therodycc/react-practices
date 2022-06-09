import React from 'react'
import Layout from '../../components/layout'
import { HTMLForm } from '../../components/pages/forms'

const FormsPage = () => {
    return (
        <>
            <Layout>
                <div className="container mt-3">
                    <h1>Forms</h1>
                    <HTMLForm />
                </div>
            </Layout>
        </>
    )
}

export default FormsPage