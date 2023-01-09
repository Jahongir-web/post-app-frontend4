import React from 'react'
import { RegisterForm } from '../components/RegisterForm/RegisterForm'

export const Register = () => {
  return (
    <div className='register'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 p-3 d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-primary display-3'>JS MEDIA</h1>
            <h2 className='text-primary fw-bolder'>Webstar poduction 2022</h2>
          </div>
          <div className="col-12 col-md-6 p-3">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
