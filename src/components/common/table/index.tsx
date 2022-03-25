import React from 'react'
import { TablePropsI } from '../../../interfaces/table/table.interface'


const Table = ({ headers, items }: TablePropsI) => {
    return (
        <>
            <table className="table ">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table