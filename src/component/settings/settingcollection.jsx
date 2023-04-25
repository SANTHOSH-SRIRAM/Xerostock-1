import React from 'react'
import "./settingcollection.css";
import Image from "../assest/assest.js"
export const Settingcollection = () => {
  return (
    <div id='collection'>
      <label className='collectiontitle'>Architecture </label><br />
      <div className='collection-row'>        {
        Image.map((items) =>
          <div key={items.id} >
            <img src={items.Images} alt="img1" />
            <label>Village Lounge </label>
          </div>
        )}
      </div>
      <label>Jewellery </label><br />
      <div className='collection-row'>{
        Image.map((items) =>
          <div key={items.id} >
            <img src={items.Images} alt="img1" />
            <label>Village Lounge </label>
          </div>
        )}

      </div>
      <label>Tourism </label><br />
      <div className='collection-row'>{
        Image.map((items) =>
          <div key={items.id} >
            <img src={items.Images} alt="img1" />
            <label>Village Lounge </label>
          </div>
        )}
      </div>
      <label>Medical </label><br />
      <div className='collection-row'>{
        Image.map((items) =>
          <div key={items.id} >
            <img src={items.Images} alt="img1" />
            <label>Village Lounge </label>
          </div>
        )}
      </div>
    </div>
  )
}
