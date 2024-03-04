'use client';
import React from 'react'
import { useFormik } from 'formik'
import FormInput from '@/components/ui/form/input'
import CusModal from '@/components/ui/modal/modal';
import * as Yup from 'yup'
interface AddEffectiveLifeModalProps {
    open: boolean,
    close: () => void,
    title?: string,
    handleSubmit: (values: {
        title: string,
        value: string
    }) => void
}
export default function AddEffectiveLifeModal({ open, close, title, handleSubmit }: AddEffectiveLifeModalProps) {
    const formik = useFormik({
        initialValues: {
            title: "",
            value: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            value: Yup.string().required("Value is required"),
        }),
        onSubmit: handleSubmit,
    });
    return (
        <CusModal open={open} close={close} title={title} handleOk={() => handleSubmit({
            title: formik.values.title,
            value: formik.values.value
        })} >
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col gap-4'
            >
                <FormInput onBlur={formik.handleBlur}  errors={formik.errors?.title} value={formik.values.title} onChange={formik.handleChange} type='text' name='title' placeHolder='Enter Title' label='Effective life title' />
                <FormInput onBlur={formik.handleBlur}  errors={formik.errors?.value} value={formik.values.value} onChange={formik.handleChange} type='text' name='value' label='Effective life value' placeHolder='Enter Value' />
            </form>
        </CusModal>
    )
}
