import React, { useState } from 'react'
import Button from '../../components/common/button';
import Table from '../../components/common/table'
import Layout from '../../components/layout'
import { TableHeadersI } from '../../interfaces/table/table.interface';

const Notes = () => {


    const [notes, setNotes] = useState([
        {
            title: "Hello world",
            description: "The new description data"
        },
        {
            title: "Hello world 2",
            description: "The new description data 2"
        },
    ]);
    const notesHeader: TableHeadersI[] = [
        {
            title: 'Title',
            key: "title"
        },
        {
            title: 'Description',
            key: "description"
        },
        {
            title: 'Actions',
            key: "",
            render: ({ item }: any) => {
                return (
                    <>
                        <Button title={'Delete'} action={() => {
                            console.log({ item });
                        }} bgClass={'danger'} />
                    </>
                )
            }
        }
    ]

    return (
        <>
            <Layout>
                <div className="m-5">
                    <Table
                        headers={notesHeader}
                        items={notes} />
                </div>
            </Layout>
        </>
    )
}

export default Notes