import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '/store/dashboard', title: 'Tổng quan', icon: 'dashboard' },
    {
        path: 'colsystem', title: 'Quản lý thông tin nhân sự', icon: 'settings', items: [
            { path: '/store/system/account', title: 'Quản lý tài khoản', icon: '' },
            { path: '/store/system/permission', title: 'Phân quyền', icon: '' },
            { path: '/store/system/permissiongroup', title: 'Nhóm quyền', icon: '' },
        ]
    },
    {
        path: 'collist', title: 'Danh mục', icon: 'view_list', items: [
            { path: '/store/list/project', title: 'Danh mục dự án', icon: '' },
            { path: '/store/list/icd', title: 'ICD', icon: '' },
            { path: '/store/list/permission', title: 'Danh mục nhóm quyền', icon: '' },
            { path: '/store/list/otherlist', title: 'Danh mục dùng chung', icon: '' },
            { path: '/store/list/authgr', title: 'Nhóm phân quyền', icon: '' },
            { path: '/store/list/draw', title: 'Quản lý giai đoạn', icon: '' },
            { path: '/store/list/sprint', title: 'Danh Mục Giai Đoạn', icon: '' },
            { path: '/store/list/projecttask', title: 'Quản Lý Công Việc', icon: '' },
            { path: '/store/list/comment', title: 'Quản Lý Bình Luận', icon: '' },
            { path: '/store/list/taskforsprint', title: 'Đầu Việc Cho Giai Đoạn', icon: '' }
        ]
    }
    , {
        path: 'colperson', title: 'Thiết lập', icon: 'group_add', items: [
            { path: '/store/list/personproject', title: 'Thiết lập người cho dự án', icon: '' }
        ]
    }
];
