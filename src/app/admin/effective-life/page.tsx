'use client';
import React, { useState } from 'react'
import CusTable from '@/components/ui/table/table';
import { useRouter } from 'next-nprogress-bar';
import { routes } from '@/core/constants/route';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import AddEffectiveLifeModal from './add-effective-life/add-effective-life.modal';

export default function EffectiveLife() {
  const [showModal, setShowModal] = useState<boolean>(false);
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
      title: "Value",
      key: "value",
      dataIndex: "value",
    },

  ];
  const test_data = [{
    id: 1,
    name: "Air Conditioning Assets - Chillers, Absorption",
    value: "10",
  }]
  const handleSubmit = (values: { title: string, value: string }) => {
    console.log(values)
  }
  return (
    <div>
      <p className='text-2xl font-bold pb-4'>Effective Life</p>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-3xl font-bold pb-4'>Asset List - Residential SD After 01/07/2019</p>
        <Button type='primary' icon={<PlusSquareOutlined />} onClick={() => setShowModal(true)}>
          Add Effective Life
        </Button>
      </div>
      <CusTable
        columns={userColumns}
        dataSource={test_data}
        loading={false}
        sticky={true}
        bordered={true}
      />
      <AddEffectiveLifeModal handleSubmit={handleSubmit} open={showModal} close={() => setShowModal(false)} title='Effective Life' />
    </div>
  )
}
