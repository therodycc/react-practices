import React, { useState } from 'react'
import Table from '../../components/common/table'
import Layout from '../../components/layout'
import { TableHeadersI } from '../../interfaces/table/table.interface';

const Notes = () => {


    const [notes, setNotes] = useState([]);
    const notesHeader: TableHeadersI[] = [
        {
            title: 'Title',
            key: "title"
        }
    ]
    return (
        <>
            <Layout>
                <div className="m-5">
                    <Table
                        headers={notesHeader}
                        items={[]} />
                </div>
            </Layout>
        </>
    )
}

export default Notes