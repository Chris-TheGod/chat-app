import { useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  const { handleUserRegister } = useAuth()

  const [credentials, setCredentials] = useState({
    email: '',
    password1: '',
    password2: '',
  })

  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setCredentials({ ...credentials, [name]: value })
  }

  return (
    <div className='auth--container'>
      <div className='form-wrapper'>
        <form
          onSubmit={(e) => {
            handleUserRegister(e, credentials)
          }}>
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
              name='password1'
              placeholder='Enter your password...'
              value={credentials.password1}
              onChange={handleInputChange}
            />
          </div>
          <div className='field-wrapper'>
            <label>Confirm Password:</label>
            <input
              type='password'
              required
              name='password2'
              placeholder='Enter your password...'
              value={credentials.password2}
              onChange={handleInputChange}
            />
          </div>
          <div className='field-wrapper'>
            <input
              className='btn btn--lg btn--main'
              type='submit'
              value='Login'
            />
          </div>
        </form>
        <p>
          Already have an account? <Link to='/login'>here</Link>
        </p>
      </div>
    </div>
  )
}
Link
