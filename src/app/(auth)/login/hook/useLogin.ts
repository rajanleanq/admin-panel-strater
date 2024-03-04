import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useEffect } from 'react';

const initialValues = { email: "", password: "", rememberPassword: true }

export default function useLogin() {
    const router = useRouter();

    const onSubmit = async (values: any, { setSubmitting }: any) => {
        if (values.rememberPassword) {
            setCookie("rememberdPassword", JSON.stringify(values))
        }
        setCookie("token", "jwttoken")
        router.push("/admin")
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnMount: false,
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true,
    });

    const { setValues } = formik;

    useEffect(() => {
        const rememberdPassword = getCookie("rememberdPassword")
        if (rememberdPassword) {
            const values = JSON.parse(rememberdPassword);
            setValues(values)
        }
    }, [setValues])

    return formik
}