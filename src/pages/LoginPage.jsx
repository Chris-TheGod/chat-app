import { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [])

  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setCredentials({ ...credentials, [name]: value })
    console.log(credentials)
  }

  return (
    <div className='auth--container'>
      <div className='form-wrapper'>
        <form>
          <div className='field-wrapper'>
            <label>Email:</label>
            <input
              type='email'
              required
              name='email'
              placeholder='Enter your email...'
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>

          <div className='field-wrapper'>
            <label>Password:</label>
            <input
              type='password'
              required
              name='password'
              placeholder='Enter your password...'
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
