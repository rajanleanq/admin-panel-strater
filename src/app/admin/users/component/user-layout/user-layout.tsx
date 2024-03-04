'use client';
import React from 'react'
import CusTable from '@/components/ui/table/table';
import { useRouter } from 'next-nprogress-bar';
import { routes } from '@/core/constants/route';

export default function UserLayout() {
    const router = useRouter();
    const userColumns = [
        {
            title: "SN",
            dataIndex: "id",
            key: "id",
            width: 70,
        },

        {
            title: "Name",
            key: "name",
            dataIndex: "name",
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "email",
        },
        {
            title: "Phone",
            key: "phone",
            dataIndex: "phone",

        },
    ];
    const test_data = [{
        id: 1,
        name: "Rajan Raj Shah",
        email: "rajan.shah2022@gmail.com",
        phone: "9840805410",
    }]
    return (
        <div>
            <p className='text-2xl font-bold pb-4'>Users</p>
            <CusTable
                columns={userColumns}
                dataSource={test_data}
                loading={false}
                sticky={true}
                bordered={true}
                onRowClick={(rows: any) => router.push(routes?.users + '/' + rows?.id)}
            />
        </div>
    )
}
