import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";
import { PlayButtonIcon, DirectIcon, SearchIcon, HeartIcon, CreateIcon } from "./Icons";

function NavButton ({address, name, Icon}) {
    const [bold, setBold] = useState(false);

    return <li className="nav-button">
        <Link to={address} onClick={() => setBold(!bold)} style={{ fontWeight: bold ? "bold" : "normal" }}>
            {Icon && (
                <Icon/>
            )}
            {name}
        </Link>
    </li>
}

function NavBar () {
    return <nav className="nav-bar">
        <div className="logo">
            <Link to="/">Instagram</Link>
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
}

export default NavBar