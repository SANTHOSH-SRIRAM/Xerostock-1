// import React, { useState } from 'react'
import "./myaccount.css";
import { useNavigate } from 'react-router';
import Settingprofile from './settingprofile';



export const Myaccount = () => {

        const  navigate = useNavigate
        

        // const [show ,setShow] =useState(false)

        // const display =() => {
        //     setShow(!show)

        //     return show? <Settingprofile/>:null;

        // }


    return (
        <div id='myaccount'>
            <label className='myacc'>My Account</label>
            <div className='accounts'>
                
                <button onClick= {()=>navigate("/settingprofile")}>Profile</button>
                <button>Plans and Bills</button>
                <button>My collections</button>
                <button>Become a creator</button>
            </div>
        </div>
    )
}
