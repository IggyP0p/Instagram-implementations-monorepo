import { HeartIcon, MessageCircleIcon, DirectIcon } from "./Icons"
import defaultImage from "../assets/Error404.png"
import defaultProfilePic from "../assets/defaultUser.png"


function ReelsFrame () {
    return (
        <div 
            className="reels-interface"
            style={{
                width: '100%', height: '100%',
                display: 'flex',justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}
        >
            <div 
                className="reels-frame"
                style={{
                    overflow: 'hidden',
                    width: '400px', height: '95%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '8px'
                }}
            >

                <img
                    src={defaultImage}
                />                

            </div>

            <div 
                className="reels-interactions"
                style={{
                    display:'flex',
                    flexDirection: 'column',
                    margin: '70% 0px 50px 0px',
                    gap: '30px'
                }}
            >
                <HeartIcon/>
                <MessageCircleIcon/>
                <DirectIcon/>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="25" height="25" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    color='white'
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-bookmark-icon lucide-bookmark"
                    ><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>
                </svg>
                <div 
                    className="reels-profile-pic-frame"
                    style={{
                        width: '30px', height: '30px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        backgroundColor: 'white',
                        overflow: 'hidden',
                        borderRadius: '6px',
                    }}
                >
                    <img
                        src={defaultProfilePic}
                        style={{
                            width: '30px',
                        }}
                    />
                </div>
            </div>


        </div>
    );
};

export default ReelsFrame