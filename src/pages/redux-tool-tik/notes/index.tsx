import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/common/button';
import Table from '../../../components/common/table';
import Layout from '../../../components/layout';
import { TableHeadersI } from '../../../interfaces/table/table.interface';
import { addNoteAction, deleteNoteAction } from '../../../redux/slices/notes.slices';

const ToolTikNotes = () => {

    const dispatch = useDispatch()
    const { notes } = useSelector((state: any) => state)

    useEffect(() => {
        dispatch(addNoteAction({
            title: 'Note 1',
            description: 'Description 1',
            author: 'Author 1'
        }))
    }, []);


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
            title: 'Author',
            key: "author"
        },
        {
            title: 'Actions',
            key: "",
            render: ({ item, index }: any) => {
                return (
                    <>
                        <Button title={'Delete'} action={() => {
                            dispatch(deleteNoteAction({ id: index }))
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

export default ToolTikNotes