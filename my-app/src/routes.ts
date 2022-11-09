import React from 'react';
import {
    MdHome,
    MdLogout,
    MdNotifications,
    MdSettings,
    MdOutlineCreate,
    MdEmail,
    MdDeleteForever,

} from 'react-icons/md'
import { Home, Logout, Notifications,Messages, CreateMessage,RemovedMessages} from './pages';

export enum RoutePath {
    LOG_IN = "/login",
    FORGOT_PASSWORD = "/forgot_password",
    HOME = "/",
    LOG_OUT = "/log_out",
    NOTIFICATIONS = "/notifications",
    SETTINGS = "/settings",
    MESSAGES="/messages",
    REMOVED_MESSAGES="/removed_messages",
    CREATE_MESSAGE="/create_message"
}
export const defaultSidebarNavItems: SidebarNavItem[] = [
    {
        name: "home",
        path: RoutePath.HOME,
        icon: MdHome,
    },
    {
        name: "Notifications",
        path: RoutePath.NOTIFICATIONS,
        icon: MdNotifications,
    },
    {
        name: "Setting",
        path: RoutePath.SETTINGS,
        icon: MdSettings,
    },
    {
        name:"inbox",
        path:RoutePath.MESSAGES,
        icon:MdEmail
    },
    {
        name: "Logout",
        path: RoutePath.LOG_OUT,
        icon: MdLogout,
    }
]
export const messagesSidebarNavItems:SidebarNavItem[]= [
    {
        name:"Create message",
        path:RoutePath.CREATE_MESSAGE,
        icon:MdOutlineCreate
    },
    {
        name:"Check messages",
        path:RoutePath.MESSAGES,
        icon:MdEmail
    },
    {
        name:"Removed messages",
        path:RoutePath.REMOVED_MESSAGES,
        icon:MdDeleteForever
    },
    {
        name: "home",
        path: RoutePath.HOME,
        icon: MdHome,
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
        name: "notifications",
        path: RoutePath.NOTIFICATIONS,
        component: Notifications,
        sidebarNavItems: defaultSidebarNavItems
    },
    {
        name:"messages",
        path:RoutePath.MESSAGES,
        component: Messages,
        sidebarNavItems:messagesSidebarNavItems
    },
    {
        name:"createMeassage",
        path:RoutePath.CREATE_MESSAGE,
        component:CreateMessage,
        sidebarNavItems:messagesSidebarNavItems
    },
    {
        name:"removedMessages",
        path:RoutePath.REMOVED_MESSAGES,
        component:RemovedMessages,
        sidebarNavItems:messagesSidebarNavItems
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