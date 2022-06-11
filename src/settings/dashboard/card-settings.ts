interface CardSettingsDashboardI {
    title: string;
    image: string
    route: string
}
export const cardSettingsDashboard: CardSettingsDashboardI[] = [
    {
        title: 'Modals',
        route: '/modals',
        image: '/assets/images/dashboard/web-browser.png',
    },
    {
        title: 'DropDowns',
        route: '/drop-downs',
        image: '/assets/images/dashboard/select.png',
    },
    {
        title: 'Form Practices',
        route: '/forms',
        image: '/assets/images/dashboard/contact-form.png',
    },
]