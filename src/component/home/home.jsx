import React from 'react'
import "./home.css";

const Home = () => {
    return (
        <div id='home'>
            <header>
                <div className='header-nav'>
                    <div className='subheader1'>
                        <label>Home</label>
                        <label>About Us</label>
                        <select name="" id="">
                            <option value="" hidden>Category</option>
                        </select>
                    </div>
                    <label className='xero'>XERO</label>
                    <button className='button'>Login</button>
                    <button>Signup</button>
                </div>
                <div className='head-row'>
                    <h2>An all in one marketplace <br /> for AR / VR</h2>
                    <div className='box'>
                        <input type="text" className='box1' />
                        <input type="text" className='box2' />
                        <input type="text" className='box2' />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home