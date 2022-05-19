import React from 'react'
import { TablePropsI } from '../../../interfaces/table/table.interface'
import { v4 as GxUUID } from 'uuid'

const Table = ({ headers, items }: TablePropsI) => {
    return (
        <>
            <table className="table ">
                <thead className="bg-primary text-white">
                    <tr key="head_table_row">
                        {
                            headers?.map((head, index) => (
                                <th key={GxUUID()} scope="col">
                                    {head?.title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        items?.map((item, index) => (
                            <tr key={'table_column_' + index}>
                                {
                                    headers.map((head, _index) => (
                                        <td key={GxUUID()} >
                                            {(head?.key && item[head?.key])}
                                            {typeof head?.render === 'function' && !head?.key && <head.render item={item} index={index} />}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table