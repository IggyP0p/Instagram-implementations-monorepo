import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";
import { HomepageIcon, PlayButtonIcon, DirectIcon, SearchIcon, HeartIcon, CreateIcon, DefaultUserIcon } from "./Icons";
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
        <div className="nav-mask">
            <div className="nav-container">
                <div className="logo">
                    <Link to='/'>
                        <img
                            src={instagramLogo}
                            alt="Instagram"
                            style={{ width: 44 }}
                        />
                    </Link>
                </div>
                <ul>
                    <NavButton address='/' name='Homepage' Icon={HomepageIcon}/>
                    <NavButton address='/reels' name='Reels' Icon={PlayButtonIcon}/>
                    <NavButton address='/direct' name='Direct' Icon={DirectIcon}/>
                    <NavButton address='/search' name='Search' Icon={SearchIcon}/>
                    <NavButton address='/notifications' name='Likes' Icon={HeartIcon}/>
                    <NavButton address='/create' name='Create' Icon={CreateIcon}/>
                    <NavButton address='/profile' name='Profile' Icon={DefaultUserIcon}/>
                </ul>
            </div>
        </div>
        
    </nav>
    
    );
}

export default NavBar