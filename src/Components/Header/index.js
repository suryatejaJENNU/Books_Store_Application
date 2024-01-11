import { Component } from "react";

import { FaRegUser,FaRegHeart } from "react-icons/fa";

import { FaBagShopping } from "react-icons/fa6";

import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
    render() {
        return (
            <div  className="header-container">
                <div className="header-sub-Container">
               <img src = "https://logo.com/image-cdn/images/kts928pd/production/c428e1b4ee4c52cb2454f34746ac16cabca43248-392x398.png?w=1080&q=72" alt = "logo-image" className="logo-image"/>
                <ul type = "none" className="align-logos">
                    <li className="icons"><FaRegUser/><span className="icon-names">User</span></li>
                     <li className="icons"><FaRegHeart/><span className="icon-names">Likes</span></li>
                    <li className="icons"> <FaBagShopping/><span className="icon-names">Cart</span></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Header