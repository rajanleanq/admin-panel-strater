'use client';
import React from 'react'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next-nprogress-bar'

export default function UserPage() {
    const router = useRouter();
    return (
        <div>
            <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => router.back()}>
                Back to users
            </Button>
            <p className='text-3xl text-center font-bold'>Rajan Raj Shah</p>
            <div>

            </div>
        </div>
    )
}
