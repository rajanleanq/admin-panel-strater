"use client"
import React from 'react'
import { ChildrenType } from '../interface/children.base'
import StoreProvider from '@/store/provider'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function AppProviderWrapper({ children }: ChildrenType) {
    return (
        <StoreProvider>
            {children}
            <ProgressBar
                height="2px"
                color="red"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </StoreProvider>
    )
}