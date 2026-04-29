import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";
import { PlayButtonIcon, DirectIcon, SearchIcon, HeartIcon, CreateIcon } from "./Icons";
import instagramLogo from "../assets/instagram.png";

function NavButton ({ address, name, Icon }) {
    const [pressed, setPressed] = useState(false);

    return <li className="nav-button">
        <Link 
            to={address} 
            onClick={() => setPressed(!pressed)} 
            style={{ fontWeight: pressed ? "bold" : "normal" }}
        >
            {Icon && (
                <Icon pressed={ pressed } />
            )}
            {name}
        </Link>
    </li>
}

function NavBar () {

    return (
    
    <nav className="nav-bar">
        <div className="logo">
            <Link to='/'>
                <img
                    src={instagramLogo}
                    alt="Instagram"
                    style={{ width: 56 }}
                />
            </Link>
        </div>
        <ul>
            <NavButton address='/' name='Homepage'/>
            <NavButton address='/search' name='Reels' Icon={PlayButtonIcon}/>
            <NavButton address='/' name='Direct' Icon={DirectIcon}/>
            <NavButton address='/' name='Search' Icon={SearchIcon}/>
            <NavButton address='/' name='Likes' Icon={HeartIcon}/>
            <NavButton address='/' name='Create' Icon={CreateIcon}/>
            <NavButton address='/' name='Profile'/>
        </ul>
    </nav>
    
    );
}

export default NavBar