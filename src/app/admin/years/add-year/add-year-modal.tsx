'use client';
import React from 'react'
import { useFormik } from 'formik'
import FormInput from '@/components/ui/form/input'
import CusModal from '@/components/ui/modal/modal';
import * as Yup from 'yup'
interface AddYearProps {
    open: boolean,
    close: () => void,
    title?: string,
    handleSubmit: (values: {
        year: string
    }) => void
}
export default function AddYearModal({ open, close, title, handleSubmit }: AddYearProps) {
    const formik = useFormik({
        initialValues: {
            year: ""
        },
        validationSchema: Yup.object({
            year: Yup.string().required("Year is required"),
        }),
        onSubmit: handleSubmit,
    });
    return (
        <CusModal open={open} close={close} title={title} handleOk={() => handleSubmit({
            year: formik.values.year
        })} >
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col gap-4'
            >
                <FormInput onBlur={formik.handleBlur} errors={formik.errors?.year} value={formik.values.year} onChange={formik.handleChange} type='text' name='value' label='Year' placeHolder='Enter year' />
            </form>
        </CusModal>
    )
}
