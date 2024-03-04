"use client"
import React from 'react'
import { ChildrenType } from '../interface/children.base'
import StoreProvider from '@/store/provider'
export default function AppProviderWrapper({ children }: ChildrenType) {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}