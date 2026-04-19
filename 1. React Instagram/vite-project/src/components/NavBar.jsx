import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";
import { PlayButtonIcon, DirectIcon, SearchIcon } from "./Icons";

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
            <NavButton address='/' name='Homepage' Icon={PlayButton}/>
            <NavButton address='/search' name='Reels' Icon={PlayButtonIcon}/>
            <NavButton address='/' name='Direct' Icon={DirectIcon}/>
            <NavButton address='/' name='Search' Icon={SearchIcon}/>
            <NavButton address='/' name='Likes'/>
            <NavButton address='/' name='Create'/>
            <NavButton address='/' name='Profile'/>
        </ul>
    </nav>
}

export default NavBar