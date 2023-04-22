import React, { Component } from "react";
import "../styles/Styles.css";
import { AccessAlarm, Search, ThreeDRotation } from '@mui/icons-material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Input, Paper, TextField, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import Cards from "./Cards";




class Home extends Component {
    render() {
        return (
            <>
                <div className="navBar">
                    <DensityMediumIcon className="icon" />
                    <img className="logo" src="https://techinfini.in/wp-content/uploads/2014/10/ecommerce-white-icon.png" />
                    <input className="searchBar" placeholder="Search.."></input>
                    <div>
                        <ul className="menuList">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Sign In</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SettingsIcon className="icon" />
                        <AccountCircleIcon className="icon" />
                        <ShoppingCartIcon className="icon" />
                    </div>
                </div>
                <div>
                    <Cards />
                </div>
            </>
        )
    }
}

export default Home;