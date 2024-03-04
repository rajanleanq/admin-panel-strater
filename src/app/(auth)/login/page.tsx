import React from 'react'
import LoginForm from './components/login.form'

export default function LoginPage() {
    return (
        <div className=" m-auto">
            <div className="h-[97vh] flex flex-col items-center gap-4 justify-center">
                <h2 className="text-4xl text-primary-title mb-0">Admin</h2>
                <div className="w-[360px]">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
