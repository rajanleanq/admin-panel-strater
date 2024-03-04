'use client';
import React from 'react'
import CusTable from '@/components/ui/table/table';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import AddBpiModal from './add-bpi/add-bpi-modal';

export default function Bpi() {
  const [showModal, setShowModal] = React.useState(false);
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
    {
      title: "Value",
      key: "value",
      dataIndex: "value",
    },

  ];
  const test_data = [{
    id: 1,
    year: "1987",
    value: "10",
  }]
  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-2xl font-bold pb-4'>BPI</p>
        <Button type='primary' icon={<PlusSquareOutlined />} onClick={() => setShowModal(true)} >
          Add BPI
        </Button>
      </div>
      <CusTable
        columns={userColumns}
        dataSource={test_data}
        loading={false}
        sticky={true}
        bordered={true}
      />
      <AddBpiModal close={() => setShowModal(false)} open={showModal} title='Add BPI' handleSubmit={() => setShowModal(false)} />
    </div>
  )
}
