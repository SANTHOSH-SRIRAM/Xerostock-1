import React from 'react'
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"> Home</NavLink>
                    </li>
                    <li>
                        {/* <Select><option value=""></option></Select> */}
                        <select>
                            <option disabled={true} value="">--choose an option--</option>
                        </select>
                    </li>
                </ul>
            </nav>
            <input type="text" ></input>
        </div>
    )
}

export default Navbar