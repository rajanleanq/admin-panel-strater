'use client';
import React from 'react'
import { useFormik } from 'formik'
import FormInput from '@/components/ui/form/input'
import CusModal from '@/components/ui/modal/modal';
import * as Yup from 'yup'
interface AddBpiProps {
    open: boolean,
    close: () => void,
    title?: string,
    handleSubmit: (values: {
        year: string,
        value: string
    }) => void
}
export default function AddBpiModal({ open, close, title, handleSubmit }: AddBpiProps) {
    const formik = useFormik({
        initialValues: {
            year: "",
            value: ""
        },
        validationSchema: Yup.object({
            year: Yup.string().required("Year is required"),
            value: Yup.string().required("Value is required"),
        }),
        onSubmit: handleSubmit,
    });
    return (
        <CusModal open={open} close={close} title={title} handleOk={() => handleSubmit({
            year: formik.values.year,
            value: formik.values.value
        })} >
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col gap-4'
            >
                <FormInput onBlur={formik.handleBlur} errors={formik.errors?.year} value={formik.values.year} onChange={formik.handleChange} type='text' name='year' placeHolder='Enter year' label='Bpi Year' />
                <FormInput onBlur={formik.handleBlur} errors={formik.errors?.value} value={formik.values.value} onChange={formik.handleChange} type='text' name='value' label='Bpi value' placeHolder='Enter Value' />
            </form>
        </CusModal>
    )
}
