"use client"
import React from 'react'

import TextEditor from '@/components/ui/text-editor/texteditor'
import FlatButton from '@/components/ui/button/button'

import usePrivacyForm from '../hook/usePrivacyForm'

export default function PrivacyForm() {
    const { formik } = usePrivacyForm();

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='flex justify-between'>
                <h3 className='pb-5 text-lg font-semibold'>Privacy Policy</h3>
                <FlatButton color='bg-blue-800 text-white h-fit' title='Update' />
            </div>
            <TextEditor placeholder='Enter content of history here.' editorValues={""} getEditorValues={(data: string) => { }} />
        </form>
    )
}
