import { FastField } from 'formik';

const Input = ({
    formik,
    icon,
    label,
    name,
    type,
}) => {
    return <div
        className={`relative w-full z-10 mb-5 validate-input ${formik.errors[name] && formik.touched[name] ? 'alert-validate' : null}`}
        data-validate={formik.errors[name]}>
        <FastField className='text-md leading-7 text-gray-500 w-full bg-[#e6e6e6] h-10 rounded-lg p-5' type={type} name={name} placeholder={label} />
        <span className='text-md flex items-center absolute rounded-lg w-full h-full pr-5 text-teal-800'>
            <i className={icon}></i>
        </span>
    </div>
}

export default Input
