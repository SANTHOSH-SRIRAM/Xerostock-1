import React from 'react'
import "./payment.css";
// import Image from "../assest/assest.js"
import img1 from '../assest/1.png'


const Payment = () => {
    return (
        <div id='payment'>
            <header>
                <label className='home'>Home</label>
                <label className='xero'>XERO</label>
                <i class="fa-solid fa-user fa-lg"></i>
            </header>
            <div className='main'>
                <div className='subcontainer'>
                    <div className='nav'>
                        <p>Market<i className="fa-thin fa-greater-than fa-lg"></i> cart <i className="fa-thin fa-greater-than fa-lg"></i> payment
                        </p>
                    </div>
                    <hr />
                    <label className='select-label'>Select payment methods</label>
                    <div className='select-payment'>
                        <div>
                            <input type="radio" name="pay with Debit / Credit / ATM Card" id="" />
                            <label htmlFor="">pay with Debit / Credit / ATM Card</label>
                        </div>
                        <div>
                            <input type="radio" name="Other UPI" id="" />
                            <label htmlFor="">Other UPI </label>
                        </div>
                        <div>
                            <input type="radio" name="Wallet" id="" />
                            <label htmlFor="">Wallet </label>
                        </div>
                        <div>
                            <input type="radio" name="Net Banking" id="" />
                            <label htmlFor="">Net Banking </label>
                        </div>
                    </div>
                    <hr />
                    <div className='select-products'>
                        <div className='details'>
                            <label htmlFor="">select products</label>
                            <img src={img1} alt="" />
                            {/* {
                                Image.map((items) =>
                                <div key={items.id}>
                                    <img src={items.Images} alt="img1" />
                                </div>
                            )} */}
                        </div>
                        <div className='details'>
                            <br />
                            <label>Village Lounge</label>
                        </div>
                        <div className='details'>
                            <label>Price</label>
                            <label>2059</label>
                        </div>

                    </div>
                    <hr />
                    <div className='total'>
                        <div className='subtotal'>
                            <label htmlFor="">Subtotal</label>
                            <label htmlFor="">2059</label>
                        </div>
                        <button>Check out</button>
                    </div>
                </div>
                <div className='subcontainer'>
                    <input type="text" className='empty' />
                </div>
            </div>
            <footer>
                <label>2023 Ekato. All rights reserved</label>
            </footer>
        </div>
    )
}

export default Payment