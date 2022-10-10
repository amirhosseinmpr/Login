import { createContext, useState, useEffect } from 'react'

export const AdminContext = createContext({
    showSlider: false,
    setShowSlider: () => { },
    data: ('LoginUser'),
    setData: () => { },
    userInfo: { username: "", password: "" }
})

export const AdminContextContainer = ({ children }) => {

    const [showSlider, setShowSlider] = useState(false)
    const [data, setData] = useState(localStorage.getItem('LoginUser'))

    useEffect(() => {
        setData(JSON.parse(data))
    }, [])

    return (
        <AdminContext.Provider value={{
            data,
            setData,
            setShowSlider,
            showSlider,
        }}>
            {children}
        </AdminContext.Provider>
    );
}

