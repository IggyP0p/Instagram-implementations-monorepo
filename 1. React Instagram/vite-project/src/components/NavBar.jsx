import { HomepageIcon, PlayButtonIcon, DirectIcon, SearchIcon, HeartIcon, CreateIcon, DefaultUserIcon } from "./Icons";
import instagramLogo from "../assets/instagram.png";
import { Link, useLocation } from "react-router-dom";
import { SearchPanel } from './LeftBox'
import { useState } from "react";
import "../css/NavBar.css";


function NavButton ({ address, name, Icon, isActive = false}) {

    return <li className="nav-button">
        <Link 
            to={address} 
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

    const [activePanel, setActivePanel] = useState(null)

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

                        <NavButton onClick={() => setActivePanel('search')} name='Search' Icon={SearchIcon} />
                        <NavButton onClick={() => alert({activePanel})} name='Likes' Icon={HeartIcon}/>

                        <NavButton address='/create' name='Create' Icon={CreateIcon}/>
                        <NavButton address='/profile' name='Profile' Icon={DefaultUserIcon}/>
                    </ul>
                </div>
            </div>
            
            {activePanel === 'search' && <SearchPanel command={true}/>}
            
        </nav>
    
    );
}

export default NavBar