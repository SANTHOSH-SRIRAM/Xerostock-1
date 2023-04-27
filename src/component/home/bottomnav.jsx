import React from 'react'
import "./bottomnav.css";

export const Bottomnav = () => {
    return (
        <div id='Bottomnav'>
            <div className='title'>
                <label htmlFor="">Get access to most of the AR / VR content one place.</label>
            </div>
            <div className='list'>
                <label htmlFor="">Get in touch</label>
                <label htmlFor="">Legal</label>
                <label htmlFor="">Support</label>

            </div>
            <div className='socialmedia'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-pinterest"></i>
            </div>
            <div className='copyright'>
                <i class="fa-regular fa-copyright"></i>
                <label htmlFor="">2023 Xeroscape. All rights reserved</label>
            </div>
        </div>
    )
}
