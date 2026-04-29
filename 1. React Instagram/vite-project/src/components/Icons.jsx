import { Home, Search, Send, Play, Square, Heart, Plus } from "lucide-react";
import { useState } from "react";


export function PlayButtonIcon ({ pressed }) {

    return (

        <div 
            style={{
                width: 36, height: 36,

                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"}}
        >
            <Square 
                size={26}
                color="#ffffff"
                
                fill={pressed ? "#ffffff" : "rgba(0, 0, 0, 0)" }
                strokeWidth={2}
                style={{
                    position: "absolute",
                }}
            />
            <Play
                size={14}
                color={pressed ? "rgba(0, 0, 0, 0)" : "#ffffff" }
                fill="#0A0D14"
                strokeWidth={4}
                style={{
                    position: "absolute",
                    
                }}
            />
        </div>

    );

}

export function DirectIcon ({ pressed }) {

    return (
        <Send
            color={pressed ? "rgba(0, 0, 0, 0)" : "#ffffff"}
            fill={pressed ? "#ffffff" : "rgba(0, 0, 0, 0)"}
        />
    )
}

export function SearchIcon () {
    const [pressed, setPressed] = useState(false);

    return (
        <Search
            color="#ffffff"
            fill="#0A0D14"
        />
    )
}

export function HeartIcon () {
    const [pressed, setPressed] = useState(false);

    return (
        <Heart
            color="#ffffff"
            fill="#0A0D14"
        />
    )
}

export function CreateIcon () {
    const [pressed, setPressed] = useState(false);

    return (
        <Plus
            color="#ffffff"
            fill="#0A0D14"
        />
    )
}