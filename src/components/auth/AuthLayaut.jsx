import { Routes, Route } from 'react-router-dom'
import Login from '../../pages/auth/Login'

const AuthLayaut = () => {
    return <div className='h-[100vh] w-full'>
            <Routes>
                <Route path='/auth/login' element={<Login />} />
        </Routes>
    </div>
}

export default AuthLayaut
