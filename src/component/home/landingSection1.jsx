import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import "./landingSection1.css";
export const LandingSection1 = () => {
  
  return (
    <div id='LandingSection'>
      <div className='LandingSection-head'>
        <div className='LandingSection-title'>
          <label htmlFor="">XEROSCAPE</label>
        </div>
        <div className='LandingSection-logsign-in'>
          <button>Login</button>
          <button>Sign up</button>
          <button><MenuUnfoldOutlined /></button>
        </div>

      </div>
      <div id='LandingSection-input'>
       <Input className='input' prefix={<SearchOutlined />}/>
       <Button className='mic' type="primary"  shape="round" icon={<i class="fa-solid fa-microphone"></i>} />
       
      </div>
    </div>
  )
}
