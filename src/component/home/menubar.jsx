import React from 'react'
import "./menu.css";
import { CloseOutlined } from '@ant-design/icons';
export const Menu = () => {
    return (
        <div id='Menu'>
            <button><CloseOutlined /></button>
            <div className='menulist'>
                <label htmlFor="">HOME</label>
                <label htmlFor="">PRODUCT</label>
                <label htmlFor="">ABOUT</label>
                <label htmlFor="">CONTACT</label>
            </div>

        </div>
    )
}
