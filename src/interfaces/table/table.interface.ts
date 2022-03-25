export interface TablePropsI {
    headers: TableHeadersI[],
    items: any[]
}

export interface TableHeadersI {
    title: string
    key: string
    render?: Function
}