import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const user = true

  return <>{user ? <Outlet /> : <Navigate to='/login' />}</>
}
