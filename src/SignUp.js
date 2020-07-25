import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const SignUp = () => {

  const [isChecked, setIsChecked] = useState(false)
  const [data, setData] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: ''
  })
  const [passwordError, setPasswordError] = useState('')
  const [showErrors, setShowErrors] = useState(false)

  const handleCheck = e => {
    setIsChecked(e.target.checked)
  }
  const handleInputChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    name === 'password' && value.length < 6 ? setPasswordError('Minimum 6 characters') : setPasswordError('')
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (passwordError.length > 0) {
      setShowErrors(true)
    } else {
      console.log('Sign up form data', data)
      setData({ ...data, fullName: '', userName: '', email: '', password: '' })
      setIsChecked(false)
      setShowErrors(false)
    }
  }

  return (
    <div className='col-12 col-md-6 col-lg-8 p-4'>
      <form className='form-sign py-5 p-lg-5' onSubmit={handleSubmit}>
        <div className='form-toggle text-muted small'>Already a member?
        <NavLink to='/signin'> Sign in</NavLink>
        </div>
        <div className='mb-4'>
          <h1 className='h2 mb-3 font-weight-normal'>Sign up</h1>
        </div>

        <div className='form-row text-center'>
          <div className='col-8'>
            <a className='btn btn-lg btn-primary btn-image-wrap' href='#' role='button'>
              <img src='google.svg' className='btn-image' alt='Sign with Google' />
              Sign up with Google
            </a>
          </div>
          <div className='col d-flex justify-content-end'>
            <a className='btn btn-lg btn-light btn-social' href='#' role='button'>
              <img src='twitter.svg' alt='Sign with Twitter' />
            </a>
          </div>
          <div className='col d-flex justify-content-end'>
            <a className='btn btn-lg btn-light btn-social' href='#' role='button'>
              <img src='fb.svg' alt='Sign with Facebook' />
            </a>
          </div>
        </div>
        <div className=' divider my-4 text-muted'>Or</div>

        <div className='form-row'>
          <div className='col'>
            <label htmlFor='fullName'>Full name</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              className='form-control bg-light border-0'
              required
              value={data.fullName}
              onChange={handleInputChange}
              autoFocus
            />
          </div>
          <div className='col'>
            <label htmlFor='userName'>Username</label>
            <input
              type='text'
              id='userName'
              name='userName'
              className='form-control bg-light border-0'
              required
              value={data.userName}
              onChange={handleInputChange}
            />
          </div>
        </div>


        <div className='form-label-group mt-3'>
          <label htmlFor='inputEmail'>Email Address</label>
          <input
            type='email'
            id='inputEmail'
            name='email'
            className='form-control bg-light border-0'
            required
            value={data.email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-label-group mt-3'>
          <label htmlFor='inputPassword'>Password</label>
          <input
            type='password'
            id='inputPassword'
            name='password'
            className='form-control bg-light border-0'
            placeholder='6+ characters'
            required
            value={data.password}
            onChange={handleInputChange}
          />
          {showErrors && <div className='small text-danger'>{passwordError}</div>}
        </div>

        <div className='form-group mt-3'>
          <div className='form-check'>
            <input className='form-check-input' type='checkbox' id='gridCheck' checked={isChecked} onChange={(e) => handleCheck(e)} />
            <label className='form-check-label text-muted' htmlFor='gridCheck'>
              Creating an account means you're okay with our <a href='#'>Terms of Service</a>, <a href='#'>Privacy Policy</a>, and our default <a href='#'>Notification Settings</a>.
                  </label>
          </div>
        </div>

        <div className='col-12 col-md-6 px-0'>
          <button
            className='btn btn-danger btn-block'
            disabled={!isChecked}
            type='submit'
          >
            Create account
        </button>
        </div>
      </form>
    </div>
  )
}