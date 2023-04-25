import React from 'react'
import "../css/signup.css";

const Signup = () => {
  return (
    <div id='signup'>
        <div className='loginpass'>
        <label htmlFor="signup" className='signup'>Signup</label>
        <label htmlFor="log" className='log'>Login</label><br />
        <label htmlFor="login"className='login'>LogIn into your Account</label><br />
        <input type="text" className='email' placeholder='Email'/><br />
        <input type="text" className='password' placeholder='password'/><br />
        <button>login</button>
        <label htmlFor="forget" className='forget'>Forget password?</label>
        </div>
        <div className='loginmail'>
            <input type="button" value="continue with Google" className='google'/><br />
            <input type="button" value="continue with" className='con1'/><br />
            <input type="button" value="continue with" className='con2'/><br />
            <label className='byclick'>By clicking Sign up you agree to terms and policies</label>
        </div>
    </div>
  )
}

export default Signup