import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
// import { Settingplans } from './component/settings/settingplans';
// import Signup from './component/signup';
// import Navbar from './component/navbar/navbar';
// import { HomeSettings } from './component/settings/homeSettings';
// import HomeSetting1 from './component/settings/homeSetting1';
// import HomeSetting2 from './component/settings/homeSetting2';
// import Payment from './component/payment/payment';
// import Home from './component/home/home';
// import { SettingIndex } from './component/settings/settingIndex';
// import { LandingSection1 } from './component/home/landingSection1';
// import { LandingpageMenu1 } from './component/home/landingpageMenu1';
import { Voiceassist } from './component/home/voiceassist';
// import { Bottomnav } from './component/home/bottomnav';
// import { Menu } from './component/home/menubar';
// import Settingprofile from './component/settings/settingprofile';
// import { Settingcollection } from './component/settings/settingcollection';
// import { Myaccount } from './component/settings/myaccount';
// import { Settingnav } from './component/settings/settingnav';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar></Navbar> */}
    <Routes>
        <Route path="" element={<Voiceassist />}></Route>
      </Routes>
    </BrowserRouter>
      
   
  );
}

export default App;
