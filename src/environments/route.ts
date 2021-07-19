export const route: any = [
    {
        name: 'Dashboard',
        href: '',
        icon: 'fa-tachometer',
        key: 'dashboard',
        subMenus: [],
    },
    {
        name: 'Employee',
        href: '#',
        icon: 'fa-user-circle',
        key: 'employee',
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
        key: 'department',
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
        name: 'Attendance',
        href: '',
        icon: 'fa-calendar-check-o',
        key: 'attendance',
        subMenus: [],
    },
    
];