import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

export const PrivateRoutes = () => {
  const { user } = useAuth()

  return <>{user ? <Outlet /> : <Navigate to='/login' />}</>
}
