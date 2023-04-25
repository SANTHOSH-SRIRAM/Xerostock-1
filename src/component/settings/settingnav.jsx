import React from 'react'
import "./settingnav.css";
export const Settingnav = () => {
    return (
        <div id='nav'>
            <div className='nav-bar'>
                <label htmlFor="">Home</label>
                <select>
                    <option hidden>Category</option>
                </select>
                {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
                <input type="text" />
                {/* <button><i class="fa-solid fa-microphone"></i></button> */}
            </div>
        </div>
    )
}
