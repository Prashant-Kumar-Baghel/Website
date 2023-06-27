import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import Cart from '../Cart/Cart'


const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    //we have three section in navbar hence we create left,center,right.and we also create a wrapper here because we will give some padding here.
    <div className="navbar">
        <div className="wrapper">

            <div className="left">
                <div className="item">
                <img src="/img/en.png" alt="" />
                <KeyboardArrowDownIcon/>
                </div>

                <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
                </div>

                <div className="item">
                    <Link className="link" to="/products/1">Women</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/2">Men</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/3">Children</Link>
                </div>
            </div>
            {/* In center we put logo and when we click on logo then we come to home page. */}
           <div className="center">
                <Link className="link" to="/">LAMASTORE</Link>
           </div>

           <div className="right">
                <div className="item">
                   <Link className="link" to="/">Homepage</Link>
                </div>

                <div className="item">
                   <Link className="link" to="/">About</Link>
                </div>

                <div className="item">
                   <Link className="link" to="/">Contact</Link>
                </div>

                <div className="item">
                   <Link className="link" to="/">Stores</Link>
                </div>

                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)} >
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>
           </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar