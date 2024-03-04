
"use client"
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    ProfileOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const path = usePathname();
    const router = useRouter();
    const dynamicMenuItems = [
        { key: '/admin', label: 'Dashboard', icon: <DesktopOutlined />, onClick: () => { router.push("/admin") } },
        { key: '/admin/privacy-policy', label: 'Privacy Policy', icon: <ProfileOutlined />, onClick: () => { router.push("/admin/privacy-policy") } },
    ];

    return (
        <Sider theme='light' className='pt-8' collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            {!collapsed && <p className='demo-logo-vertical text-2xl px-5 pb-8 '>Admin</p>}
            <Menu theme='light' mode="inline"
                items={dynamicMenuItems}
                defaultSelectedKeys={[path]}
            />
        </Sider>
    )
}
