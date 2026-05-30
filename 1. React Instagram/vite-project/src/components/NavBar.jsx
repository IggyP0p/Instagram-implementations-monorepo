import { HomepageIcon, PlayButtonIcon, DirectIcon, SearchIcon, HeartIcon, CreateIcon, DefaultUserIcon } from "./Icons";
import instagramLogo from "../assets/instagram.png";
import { Link, useLocation } from "react-router-dom";
import OpenPanel from './LeftBox';
import { useState } from "react";
import "../css/NavBar.css";


function NavButton ({ address = '#', name, Icon, isActive = false, onClick}) {

    return <li className="nav-button">
        <Link 
            to={address} 
            onClick={onClick}
            style={{ fontWeight: isActive ? "bold" : "normal" }}
        >
            {Icon && (
                <Icon pressed={ isActive } />
            )}
            {name}
        </Link>
    </li>
}

function NavBar () {

    const [currentPanel, setCurrentPanel] = useState(null)

    const location = useLocation()
    const currentRoute = location.pathname;

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
                        <NavButton address='/' name='Homepage' Icon={HomepageIcon} isActive={currentRoute == '/'}/>
                        <NavButton address='/reels' name='Reels' Icon={PlayButtonIcon} isActive={currentRoute == '/reels'}/>
                        <NavButton address='/direct' name='Direct' Icon={DirectIcon} isActive={currentRoute == '/direct'}/>

                        <NavButton 
                            name='Search' 
                            Icon={SearchIcon} 
                            onClick={() => setCurrentPanel("SearchPanel")}
                        />

                        <NavButton 
                            name='Likes' 
                            Icon={HeartIcon}
                            onClick={() => setCurrentPanel("NotifyPanel")} 
                        />

                        <NavButton address='/create' name='Create' Icon={CreateIcon}/>
                        <NavButton address='/profile' name='Profile' Icon={DefaultUserIcon}/>
                    </ul>
                </div>
            </div>
            
            {currentPanel === "SearchPanel" && <OpenPanel onClose={() => setCurrentPanel(null)} type={'search'}/>}
            {currentPanel === "NotifyPanel" && <OpenPanel onClose={() => setCurrentPanel(null)} type={'notify'}/>}
            
        </nav>
    
    );
}

export default NavBar