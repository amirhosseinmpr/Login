import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UrlApi } from '../../base/Services/api'

const Logout = () => {

    const [loding, setloding] = useState(true);

    useEffect(() => {
        const logintoken = JSON.parse(localStorage.getItem('LoginUser'))
        if (logintoken.token) {
            axios.get(UrlApi, {
                headers: { Authorization: `Bearer ${logintoken.token}` }
            }).then(res => {
                localStorage.removeItem('LoginUser')
                setloding(false)
            })
        }
        else {
            setloding(false)
        }
    }, [])

    return <>
        {loding ? (
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                ) :
            (<Navigate to='/auth/login' />)
            }
    </>
}

export default Logout
