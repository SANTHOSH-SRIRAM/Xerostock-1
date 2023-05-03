import React from 'react'
import "./voiceassist.css";
import { ArrowLeftOutlined } from '@ant-design/icons';
export const Voiceassist = () => {
  return (
    <div id='voiceassist'>
        <div className='back'>
        <ArrowLeftOutlined />
        </div>
        <div className='help'>
            <label htmlFor="">I help you to search better</label>
        </div>
    </div>
  )
}
