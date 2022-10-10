import { Routes, Route } from 'react-router-dom'
import Logout from './auth/Logout'
import React from 'react'

const Continer = () => {

    return <>
        <Routes>
            <Route path='/Logout' element={<Logout />} />
            </Routes>
    </>
}

export default Continer
