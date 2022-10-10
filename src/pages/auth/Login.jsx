import { Alert } from '../../base/AuthFilter/Alert'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import AuthFilterControl from '../../base/AuthFilter/AuthFilterControl'
import HttpService from '../../base/Services/HttpServies'
import React, { useEffect } from 'react'

const quickaccessStyles = 'flex w-full justify-right items-center'
const quickaccesschildStyles = 'xs:text-lg py-1 text-lg text-green-800'

const initialValues = {
    username: "",
    password: "",
}

const onSubmit = (values, navigate, submitMathods) => {
    HttpService
        (
            '/auth/login',
            'post',
            { ...values, remember: values.remember ? 1 : 0 }
        ).then
        (
            res => {
                if (res.status === 200) {
                    submitMathods.setSubmitting(false)
                    localStorage.setItem('LoginUser', JSON.stringify(res.data))
                    navigate('/')
                }
                else {
                    submitMathods.setSubmitting(false)
                    Alert("خطا", res.data.message, "error")
                }
            }
    ).catch(error => {
        console.log(error);
        Alert("خطا", error.message, "error")
        navigate('/')
    })
}

const validationSchema = Yup.object({
    username: Yup.string().required('لطفا این قسمت را پر کنید'),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^[a-zA-Z0-9@#$!%&]+$/, 'فقط حروف و عدد'),
    remember: Yup.boolean(),
})

const Login = () => {

    const navigate = useNavigate();

    return <div className='flex w-full h-auto pt-20 xs:px-10 lg:pt-64 justify-center items-center max-w-7xl mx-auto'> 
        <Formik
            initialValues={initialValues}
            onSubmit={(values, submitMathods) => onSubmit(values, navigate, submitMathods)}
            validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <div className="flex border xs:px-10 lg:px-20 py-10 bg-white rounded xs:w-full lg:w-1/2 h-full">
                            <Form className='w-full'>
                                <div className='text-center py-5'>
                                    <span className="text-lg ">
                                        ورود اعضا
                                    </span>
                                </div>
                                <div className="w-full pb-5">
                                    <AuthFilterControl
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="username"
                                        icon="fa fa-envelope"
                                        label="نام کاربری"
                                    />
                                    <AuthFilterControl
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon="fa fa-lock"
                                        label="رمز عبور"
                                    />
                                </div>
                                <div className='border border-green-800 rounded-lg w-full bg-green-200'>
                                    <div className='px-5 py-3'>
                                        <p className='xs:text-lg text-xl text-center text-green-800 font-light'>دسترسی سریع</p>
                                        <div className='py-3'>
                                            <div className={`${quickaccessStyles}`}>
                                                <p className={`${quickaccesschildStyles}`}>نام کاربری :<span className='pr-2'>kminchelle</span></p>
                                            </div>
                                            <div className={`${quickaccessStyles}`}>
                                                <p className={`${quickaccesschildStyles}`}>رمز عبور : <span className='pr-2'>0lelplR</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-800 w-full h-10 rounded-lg mt-5 flex justify-center items-center">
                                    <button className="text-white" disabled={formik.isSubmitting}>
                                        {formik.isSubmitting ? ("لطفا صبر کنید....") : ("ورود")}
                                    </button>
                                </div>
                            </Form>
                            <div className="xs:hidden lg:flex w-full justify-center items-center px-5">
                                <img src="/assets/images/img-01.png" alt="IMG" />
                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    </div>
}

export default Login;
