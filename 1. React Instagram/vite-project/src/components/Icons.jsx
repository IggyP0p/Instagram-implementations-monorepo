import { Search, Send, Play, Square, Heart, Plus, CircleUserRound, MessageCircle } from "lucide-react";
import Homepage from "../assets/casa.png"
import HomepageBold from "../assets/casa2.png"

export function HomepageIcon ({ pressed }) {

    return (
        <img
            src={pressed ? HomepageBold : Homepage}   
            alt=""
            style={{ width: 24 }}     
        />
    );
};


export function PlayButtonIcon ({ pressed }) {

    return (

        <div 
            style={{
                width: 26, height: 26,

                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
            }}
        >
            <Square 
                size={26}
                color="#ffffff"
                
                fill={pressed ? "#ffffff" : "rgba(0, 0, 0, 0)" }
                strokeWidth={2}
                style={{
                    position: "absolute"
                }}
            />
            <Play
                size={14}
                color={pressed ? "rgba(0, 0, 0, 0)" : "#ffffff" }
                fill="#0A0D14"
                strokeWidth={4}
                style={{
                    position: "absolute"
                }}
            />
        </div>

    );

};

export function DirectIcon ({ pressed }) {

    return (
        <Send
            size={22}
            color={pressed ? "rgba(0, 0, 0, 0)" : "#ffffff"}
            fill={pressed ? "#ffffff" : "rgba(0, 0, 0, 0)"}
        />
    );
};

export function SearchIcon () {

    return (
        <Search
            color="#ffffff"
            fill="rgba(0, 0, 0, 0)"
        />
    );
};

export function HeartIcon () {

    return (
        <Heart
            size={24}
            color="#ffffff"
            fill="rgba(0, 0, 0, 0)"
        />
    );
};

export function CreateIcon () {

    return (
        <Plus
            color="#ffffff"
            fill="#0A0D14"
        />
    );
};

export function DefaultUserIcon () {
    return (
        <CircleUserRound
            color="#ffffff"
        />
    );
};

export function MessageCircleIcon () {
    return (
        <MessageCircle
            color="#FFFFFF"
            size={22}
        />
    );
};

