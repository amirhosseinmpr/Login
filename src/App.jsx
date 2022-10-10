import { Navigate, useLocation } from 'react-router-dom'
import AuthLayaut from './components/auth/AuthLayaut'
import Index from './pages/homepage/Index'

function App(props) {

  const location = useLocation()
  const logintoken = localStorage.getItem('LoginUser')

  return <>
      {
        location.pathname.includes('/auth') ? (
          <AuthLayaut />
        ) : (
          <>
            {
              logintoken ? (<Index />) : (<Navigate to='/auth/login' />)
            }
          </>
        )
      }
  </>
}

export default App;
