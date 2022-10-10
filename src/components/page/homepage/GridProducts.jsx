import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { render } from 'react-dom';
import { GetUserService } from '../../../base/Services/HttpServies'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridProducts = () => {

    const [rowData, setRowData] = useState([
        { id: '', title: '', price: 1 },
    ])

    const [columnDefs] = useState([
        { field: 'id', filter: 'agNumberColumnFilter' },
        { field: 'title', filter: 'agTextColumnFilter' },
        { field: 'price', filter: 'agNumberColumnFilter' },
    ])

    useEffect(() => {
        GetUserService
            (
                '/auth/products',
                'get',
            ).then
            (
                res => {
                    if (res.status === 200) {
                        const data = res.data
                        setRowData(data.products)
                    }
                }
            )
    }, [])

    return <>
        <div className='w-full h-[100vh] flex items-center justify-center xs:my-5 ' >
            <div className='h-full lg:px-5 xs:mx-2 xs:w-full bg-white border rounded-lg lg:w-1/3 relative'>
            <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
            </div>
        </div>
    </>
}

export default GridProducts
