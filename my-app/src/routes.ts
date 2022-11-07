import React from 'react';
import {
    MdHome,
    MdLogout,
    MdNotifications,
    MdSettings

} from 'react-icons/md'

import { Home, Logout, Notifications } from './pages';

export enum RoutePath {
    LOG_IN = "/login",
    FORGOT_PASSWORD = "/forgot_password",
    HOME = "/",
    LOG_OUT = "/log_out",
    NOTIFICATIONS = "/notifications",
    SETTINGS = "/settings",
}
export const defaultSidebarNavItems: SidebarNavItem[] = [
    {
        name: "home",
        path: RoutePath.HOME,
        icon: MdHome,
    },
    {
        name: "notifications",
        path: RoutePath.NOTIFICATIONS,
        icon: MdNotifications,
    },
    {
        name: "settings",
        path: RoutePath.SETTINGS,
        icon: MdSettings,
    },
    {
        name: "logout",
        path: RoutePath.LOG_OUT,
        icon: MdLogout,
    }
]

export const routes: Route[] = [
    {
        name: "home",
        path: RoutePath.HOME,
        component: Home,
        sidebarNavItems: defaultSidebarNavItems
    },
    {
        name: "logout",
        path: RoutePath.LOG_OUT,
        component: Logout
    },
    {
        name: "notification",
        path: RoutePath.NOTIFICATIONS,
        component: Notifications,
        sidebarNavItems: defaultSidebarNavItems
    }
];


export interface SidebarNavItem {
    name: string;
    path: string;
    icon: React.ComponentType;
}
export interface Route {
    name: string;
    path: RoutePath;
    sidebarNavItems?: SidebarNavItem[];
    component: React.ComponentType;
}