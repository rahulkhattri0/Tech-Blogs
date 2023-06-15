import React from "react";
import { NavLink } from "react-router-dom";
import {SlHeart} from "react-icons/sl"
const Header = () => {
    return(
        <div className="w-full text-center border shadow-md py-2 fixed top-0 bg-white">
            <h1 className="text-4xl font-bold">TECH BLOGS</h1>
            <div className="absolute right-5 top-4">
                <NavLink to={'/liked'}>
                    <SlHeart size={25}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Header