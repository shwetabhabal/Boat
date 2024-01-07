// import { Label } from '@mui/icons-material'
import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div id='login' style={{marginTop:"100px", textAlign:'center'}}>
        <h4 style={{textAlign:'center'}}>Get <b>Started</b></h4>
        <h6>Please enter your Mobile Number to continue</h6>
        <form >
          <label>Enter Mobile Number</label>
          <br/>
          <input type='text' placeholder='Type here' name='number' className='inp'/>
          <br/>
          <button>SEND OTP</button>
        </form>
    </div>
  )
}
