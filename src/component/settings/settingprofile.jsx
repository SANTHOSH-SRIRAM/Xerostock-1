import React from 'react'
import "./settingprofile.css";

const Settingprofile = () => {
  return (
    <div className='profile'>
        <h3>Profile</h3>
        <div className='profile-column'>
          <div className='profile-row'>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='First Name' />
            <a href="#">Edit</a>
          </div>
          <hr />
          <div className='profile-row'>
            <label htmlFor="">Last name</label>
            <input type="text" placeholder='Last name' />
            <a href="#">Edit</a>
          </div>
          <hr />
          <div className='profile-row'>
            <label htmlFor="">User name</label>
            <input type="text" placeholder='User name' />
            <a href="#">Edit</a>
          </div>
          <hr />
          <div className='profile-row'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email' />
            <a href="#">Edit</a>
          </div>
          <hr />
          <div className='profile-row'>
            <label htmlFor="">Password </label>
            <input type="text" placeholder='Password ' />
            <a href="#">Edit</a>
          </div>
          <hr />
          <div className='profile-row'>
            <label htmlFor="">Language</label>
            <input type="text" placeholder='First Name' />
            <a href="#">Edit</a>
          </div>
          <hr />
          <div className='profile-row1'>
            <label htmlFor="">Manage cookies</label>
            <label htmlFor="">You can use cookies manger to review and customise the cookies </label>
            <a href="#">open cookies manager</a>
          </div>
          <hr />
          <div className='profile-row1'>
            <label htmlFor="">Delete my account</label>
            <label htmlFor="">Deleting this account will remove all your personalized information</label>
            <a href="#">Delete</a>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default Settingprofile