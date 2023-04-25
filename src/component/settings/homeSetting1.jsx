import React from 'react'
import "./homeSetting1.css";

const HomeSetting1 = () => {
    return (
        <div id='homesetting1'>
            <div className='nav-bar'>
                <label htmlFor="">Home</label>
                <select>
                    <option hidden>Category</option>
                </select>
                <input type="text" />
            </div>
            <div className='section'>
                <div className='accounts'>
                    <label className='myacc'>My Account</label>
                    <button>Profile</button>
                    <button>Plans and Bills</button>
                    <button>My collections</button>
                    <button>Become a creator</button>
                </div>
                <div className='profile'>
                    <div className='profile-sub'>
                        <div className='image'><input type="text" /></div>
                        <div className='name'>
                            <label className='firstname'>First Name</label><br />
                            <input type="text" /><br />
                            <label className='lastname'>Last Name</label><br />
                            <input type="text" /><br />
                        </div>
                    </div>
                    <div className='profile-sub1'>

                        <label className='user'>User Name</label><br />
                        <input type="text" placeholder='User Name' /><br />
                        <label>Email</label><br />
                        <input type="email" placeholder='Email' /><br />
                        <label>Password</label><br />
                        <input type="password" placeholder='Password' /><br />
                        <hr />
                        <label>Language</label><br />
                        <input type="text" placeholder='select' />
                        <h4>Manage Cookies</h4>
                        <p>You can use cookies manger to review and customise the cookies <br />open cookies manager </p>
                        <hr />
                        <h4>Delete my account</h4>
                        <p>Deleting this account will remove all your personalized information <br />Delete</p>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default HomeSetting1