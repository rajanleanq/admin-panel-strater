'use client';
import React, { useState } from 'react'
import CusTable from '@/components/ui/table/table';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import AddYearModal from './add-year/add-year-modal';

export default function Year() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const userColumns = [
        {
            title: "SN",
            dataIndex: "id",
            key: "id",
            width: 70,
        },

        {
            title: "Year",
            key: "year",
            dataIndex: "year",
        },
    ];
    const test_data = [{
        id: 1,
        year: "2023-01-23"
    }]
    const handleSubmit = (values: { year: string }) => {
        console.log(values)
    }
    return (
        <div>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-2xl font-bold pb-4'>Years</p>
                <Button type='primary' icon={<PlusSquareOutlined />} onClick={() => setShowModal(true)}>
                    Add Year
                </Button>
            </div>
            <CusTable
                columns={userColumns}
                dataSource={test_data}
                loading={false}
                sticky={true}
                bordered={true}
            />
            <AddYearModal handleSubmit={handleSubmit} open={showModal} close={() => setShowModal(false)} title='Add Year' />
        </div>
    )
}
