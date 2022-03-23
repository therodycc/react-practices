export interface SidebarOptionI {
    active: boolean
    name: string
    route: string
    subOptsActive?:boolean
}
export interface SideBarOptionsI extends SidebarOptionI {
    subOptions: SidebarOptionI[]
}

export interface SidebarOptionPropsI extends SideBarOptionsI {
}