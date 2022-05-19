export interface TablePropsI {
    headers: TableHeadersI[],
    items: any[] | null
}

export interface TableHeadersI {
    title: string
    key: string
    render?: Function
}