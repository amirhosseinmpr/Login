import { useContext } from 'react'
import { AdminContext, AdminContextContainer } from '../../base/context/adminLayoutContext'
import Continer from '../Continer'
import SliderBar from '../../components/page/sidebar/SliderBar'
import GridProducts from '../../components/page/homepage/GridProducts'
import GridTest from '../../components/page/homepage/GridTest'

const Index = () => {

    const { data } = useContext(AdminContext)

    return <>
        <AdminContextContainer value={data}>
            <div className='max-w-8xl mx-auto'>
            <SliderBar />
                <Continer />
                <div className='flex justify-center items-center w-full h-full'>
                    <GridTest />
                </div>
                <GridProducts />
            </div>
        </AdminContextContainer>
    </>
}

export default Index
