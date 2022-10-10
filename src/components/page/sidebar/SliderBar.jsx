import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import { NavLink } from 'react-router-dom'

const SliderBar = () => {

    const centerStyles = 'flex justify-center items-center w-full'

    const [data, setData] = useState(localStorage.getItem('LoginUser'))

    useEffect(() => {
        setData(JSON.parse(data))
    }, [])

    return <div className={centerStyles}>
        <div>
            <UserInfo name={data?.firstName} image={data?.image} lastName={data?.lastName} username={data?.username} email={data?.email} />
            <div className={centerStyles}>
                <NavLink to='/Logout' className={`${centerStyles} mb-5 bg-red-800 w-1/2 h-10 rounded-lg text-white`} >خروج</NavLink>
            </div>
        </div>
    </div>
}

export default SliderBar
