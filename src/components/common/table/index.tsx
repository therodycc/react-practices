import React from 'react'
import { TablePropsI } from '../../../interfaces/table/table.interface'


const Table = ({ headers, items }: TablePropsI) => {
    return (
        <>
            <table className="table ">
                <thead className="bg-primary text-white">
                    <tr>
                        {
                            headers.map(head => (
                                <>
                                    <th scope="col">
                                        {head.title}
                                    </th>
                                </>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <>
                                <tr key={'table_column_' + index}>
                                    {
                                        headers.map((head, _index) => (
                                            <>
                                                <td key={'table_column_' + _index}>
                                                    {(head.key && item[head.key])}
                                                    {typeof head.render === 'function' && !head.key && <head.render item={item} />}
                                                </td>
                                            </>
                                        ))
                                    }
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table