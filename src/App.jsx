import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { Room } from './pages/Room'
import { PrivateRoutes } from './components/PrivateRoutes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Room />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
