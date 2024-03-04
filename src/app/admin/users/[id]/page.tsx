'use client';
import React from 'react'
import { Button, Input } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next-nprogress-bar'
import CusTable from '@/components/ui/table/table';

export const PropertyValues = ({ title, value }: { title: string, value: string }) => (
    <div className='flex flex-col gap-2 text-sm'>
        <p>{title}</p>
        <Input type='text' disabled value={value} />
    </div>
)
export default function UserPage() {
    const similar_cols = [
        {
            title: "Year",
            key: "year",
            dataIndex: "year",
        },
        {
            title: "Plant & Equipment",
            key: "plantAndEquipment",
            dataIndex: "plantAndEquipment",
        },
        {
            title: "Division",
            key: "division",
            dataIndex: "division",
        },
    ]
    const minCols = [
        ...similar_cols,
        {
            title: "Total Minimum",
            key: "totalMinimum",
            dataIndex: "totalMinimum",
        },
    ];
    const maxCols = [
        ...similar_cols,
        {
            title: "Total Maximum",
            key: "totalMaximum",
            dataIndex: "totalMaximum",
        },
    ];
    const taxPaybleReductionCols = [
        {
            title: "Year",
            key: "year",
            dataIndex: "year",
        },
        {
            title: "Minimum",
            key: "minimum",
            dataIndex: "minimum",
        },
        {
            title: "Maximum",
            key: "maximum",
            dataIndex: "maximum",
        },
    ]
    const min_values = [
        {
            year: 2020,
            plantAndEquipment: "$0",
            division: "$0",
            totalMinimum: "$0",
        }
    ]
    const max_values = [
        {
            year: 2020,
            plantAndEquipment: "$0",
            division: "$0",
            totalMaximum: "$0",
        }
    ]
    const taxPaybleReductionVals = [{
        year: 2020,
        minimum: "$0",
        maximum: "$0",
    }]
    const router = useRouter();
    return (
        <div>
            <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => router.back()}>
                Back
            </Button>
            <p className='text-3xl pt-4 font-bold'>Rajan Raj Shah</p>
            <div className='grid grid-cols-2 py-4 gap-4 gap-x-8 mb-8 mt-8'>
                <PropertyValues title={"Unit"} value={"10"} />
                <PropertyValues title={"Estimated Cost of Construction"} value={"10000"} />
                <PropertyValues title={"Has Current Owner Lived In Property?"} value={"Yes"} />
                <PropertyValues title={"Has Prior Owner Lived In Property?"} value={"Yes"} />
            </div>
            <p className='text-xl text-start font-semibold pb-2'>Results:</p>
            <div className='flex flex-rows gap-8 '>
                <div className='border border-gray-300 rounded-lg p-4 shadow-lg bg-gray-100'>
                    <p className='text-lg text-center font-semibold pb-4'>Mininum Values</p>
                    <CusTable
                        loading={false}
                        columns={minCols}
                        dataSource={min_values}
                    />
                </div>
                <div className='border border-gray-300 rounded-lg p-4 shadow-lg bg-gray-100'>
                    <p className='text-lg text-center font-semibold pb-4'>Maximum Values</p>
                    <CusTable
                        loading={false}
                        columns={maxCols}
                        dataSource={max_values}
                    />
                </div>
            </div>
            <div className='border border-gray-300 rounded-lg p-4 shadow-lg bg-gray-100 mt-8'>
                <p className='text-lg text-center font-semibold pb-4'>Tax Payable Reduction - <span className='font-normal'>Marginal Tax Rate 35% </span></p>
                <CusTable
                    loading={false}
                    columns={taxPaybleReductionCols}
                    dataSource={taxPaybleReductionVals}
                />
            </div>
        </div>
    )
}
