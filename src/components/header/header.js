import React from "react";

import Logo from '../../assets/logo.png'
import il from '../../assets/logo1.jpg'

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';


import './footer.css';

//import social icons
import { BsTwitter,
        BsDiscord,
        BsInstagram } from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";
function onMintClick() {
    document.getElementById("mint").scrollIntoView();
    // alert("Your dick is hard!");
}
function onTeamClick() {
    document.getElementById("team").scrollIntoView();
}
function onRoadClick() {
    document.getElementById("roadmap").scrollIntoView();
}
function onWhitelistClick() {
    document.getElementById("whitelist").scrollIntoView();
}

function onSocialsClick() {
    document.getElementById("socials").scrollIntoView();
}

function openSea() {
    window.open("https://opensea.io/collection/dickpixnft"); 
}
class Header extends React.Component {
    render() {
        return (
            <>

                <div className='header-control'>
                    <div className='header-content'>
                        <h1><img className="thePicture" src={il}/></h1>
                        {/* <h1 style={{color: "black"}}>asdfasdfasdfasdfasdf</h1> */}
                    <div className='header-content-buttons-container'>
                        {/* <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' /> */}
                    </div>
                    </div>
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;