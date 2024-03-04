"use client"
import React from 'react'

import { LockOutlined, UserOutlined } from "@ant-design/icons";

import useLogin from '../hook/useLogin';

import CusCheckbox from '@/components/ui/form/checkbox'
import FormInput, { PasswordFormInput } from '@/components/ui/form/input'
import FlatButton from '@/components/ui/button/button';

export default function LoginForm() {
  const formik = useLogin()
  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-5">
        <FormInput
          prefix={<UserOutlined className="pr-4 text-primary-title" />}
          name="email"
          type='email'
          placeHolder="Email"
          errors={formik.errors?.email}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <PasswordFormInput
          prefix={<LockOutlined className="pr-4 text-primary-title" />}
          name="password"
          placeHolder="******"
          errors={formik.errors?.password}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="flex items-center justify-between py-5">
        <CusCheckbox
          name="rememberPassword"
          value={formik.values.rememberPassword}
          onChange={formik.handleChange}
          title="Remember Password"
        />
      </div>
      <FlatButton color='bg-blue-800 text-white' type="submit" title="Sign In" loading={formik.isSubmitting} />
    </form>
  )
}
