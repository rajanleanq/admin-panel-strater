
"use client"
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
    BorderHorizontalOutlined,
    NodeIndexOutlined
} from '@ant-design/icons';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import { routes } from '@/core/constants/route';

const { Sider } = Layout;

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const path = usePathname();
    const router = useRouter();
    const dynamicMenuItems = [
        { key: '/admin', label: 'Dashboard', icon: <DesktopOutlined />, onClick: () => { router.push("/admin") } },
        { key: routes.users, label: "Users", icon: <UserOutlined />, onClick: () => { router.push(routes.users) } },
        { key: routes.effectiveLife, label: "Effective Life", icon: <BorderHorizontalOutlined />, onClick: () => { router.push(routes.effectiveLife) } },
        { key: routes.bpi, label: "Bpi", icon: <NodeIndexOutlined />, onClick: () => { router.push(routes.bpi) } },
    ];
    const handleLogout = () => {

    }
    return (
        <Sider theme='light' className='pt-8' collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className='flex flex-col justify-between h-full'>
                <Menu theme='light' mode="inline"
                    items={dynamicMenuItems}
                    defaultSelectedKeys={[path]}
                />
                <div
                    className={`py-5 px-5 flex gap-2  hover:bg-[#E6F7FF]  opacity-75 cursor-pointer`}
                    onClick={handleLogout}
                >
                    <span className={` text-link text-red-500 font-bold`}>Logout</span>
                </div>
            </div>

        </Sider>
    )
}
