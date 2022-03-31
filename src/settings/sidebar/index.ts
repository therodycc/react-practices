export const sidebarOptions = [
    {
        name: "Dashboard",
        route: "/",
        active: true,
        subOptsActive: false,
        subOptions: []
    },
    {
        name: "With Sockets",
        route: "/sockets",
        active: false,
        subOptsActive: false,
        subOptions: [
            {
                name: "Notes",
                route: '/sockets/notes',
                active: false
            },
        ]
    },
    {
        name: "Multi select",
        route: "/todo",
        active: true,
        subOptsActive: false,
        subOptions: []
    },
    {
        name: "Ticket",
        route: "/ticket/home",
        active: false,
        subOptsActive: false,
        subOptions: [
            {
                name: "Screen ticket",
                route: '/ticket/screen-turn',
                active: false
            },
            {
                name: "Create",
                route: '/ticket/create',
                active: false
            },
        ]
    },
    {
        name: "Dropdown practices",
        route: "/drop-downs",
        active: false,
        subOptsActive: false,
        subOptions: []
    },
    {
        name: "Modals",
        route: "/modals",
        active: false,
        subOptsActive: false,
        subOptions: []
    },
    {
        name: "Forms",
        route: "/forms",
        active: false,
        subOptsActive: false,
        subOptions: []
    },
]