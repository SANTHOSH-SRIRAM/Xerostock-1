import React from 'react'
import "./settingIndex.css";
import { Settingnav } from './settingnav'
import { Myaccount } from './myaccount'
// import Settingprofile from './settingprofile'

export const SettingIndex = () => {
  return (
    <div id='settingIndex'>
       <Settingnav/>
      <div style={{display:"flex",flexDirection:"row"}}>

      <Myaccount/>
       {/* <Settingprofile/> */}

      </div>
    </div>
  )
}
