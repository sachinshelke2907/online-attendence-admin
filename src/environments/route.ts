export const route: any = [
    {
        name: 'Dashboard',
        href: '#',
        icon: 'fa-th',
        subMenus: [],
    },
    {
        name: 'Employee',
        href: '#',
        icon: 'fa-user-circle',
        subMenus: [
            {
                name: 'List',
                href: '/employee'
            },
            {
                name: 'New',
                href: '/employee/register'
            }
        ],
    },
    {
        name: 'Department',
        href: '#',
        icon: 'fa-graduation-cap',
        subMenus: [
            {
                name: 'List',
                href: '/department'
            },
            {
                name: 'New',
                href: '/department/add'
            }
        ],
    },
    {
        name: 'Attendence',
        href: '#',
        icon: 'fa-calendar-check-o',
        subMenus: [],
    }
];