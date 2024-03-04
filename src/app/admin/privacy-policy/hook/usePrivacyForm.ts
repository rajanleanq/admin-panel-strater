import { useFormik } from "formik"

export default function usePrivacyForm() {

    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })

    return { formik }
}