import React from 'react'
import "./homeSetting2.css";
import img1 from '../assest/1.png'
import img2 from '../assest/2.png'
import img3 from '../assest/3.png'
import img4 from '../assest/4.png'
import img5 from '../assest/5.png'
import img6 from '../assest/6.png'
import img7 from '../assest/7.png'
import img8 from '../assest/8.png'
import img9 from '../assest/9.png'
import img10 from '../assest/10.png'
import img11 from '../assest/11.png'
import img12 from '../assest/12.png'
import img13 from '../assest/13.png'
import img14 from '../assest/14.png'
import img15 from '../assest/15.png'
import img16 from '../assest/16.png'
import img17 from '../assest/17.png'



const HomeSetting2 = () => {
  return (
    <div id='homesetting2'>
      <div className='collection'>
        <label className='gallery-title'>Architecture</label><br />
        <div className='architecture'>
          <div className='imgtxt'>
            <img src={img1} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img2} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img3} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img4} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img5} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>

        </div>
        <label className='gallery-title'>Jewellery</label><br />
        <div className='jewellery'>
          <div className='imgtxt'>
            <img src={img6} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img7} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img8} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img9} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img10} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
        </div>
        <label className='gallery-title'>Tourism</label><br />
        <div className='tourism'>
          <div className='imgtxt'>
            <img src={img11} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img12} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img13} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
        </div>
        <label className='gallery-title'>Medical</label><br />
        <div className='medical'>
          <div className='imgtxt'>
            <img src={img14} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img15} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img16} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>
          <div className='imgtxt'>
            <img src={img17} alt="" />
            <label htmlFor="">Village Lounge</label>
          </div>


        </div>
      </div>
    </div>
  )
}

export default HomeSetting2