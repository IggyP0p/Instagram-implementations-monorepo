import defaultImage from '../assets/defaultUser.png'
import { useState } from "react";

function StoryCircle ({ image, name }) {

    return (
        <div
            className='story-container'
        >
            <div 
                className='profile-ring'
                style={{ 
                        width: '90px', height: '90px', 
                        background: 'linear-gradient(45deg, #fbc531, #eb4d4b 50%, #833ab4)',
                        borderRadius: '100%',
                        cursor: 'pointer',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} 
            >
                <div 
                    className='profile-frame'
                    style={{
                        width: '86px', height: '86px',
                        overflow: 'hidden',
                        backgroundColor: '#0A0D14',
                        borderRadius: '100%',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        src={image || defaultImage}
                        style={{ 
                            width: '88px', height: '88px',
                        }}
                    />
                </div>
            </div>

            <h6
                style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '2px'
                }}
            >
                {name}
            </h6>
        </div>
    );
}

function StoriesBar () {
    const [Image, setImage] = useState()
    
    return (
        <div 
            className="rolling-stories"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '13.5px',
                marginTop: '15px',
                marginBottom: '40px'
            }}
        >
            <StoryCircle image={Image} name={'lorem'}/>
            <StoryCircle image={Image} name={'ipsum'}/>
            <StoryCircle image={Image} name={'lorem'}/>
            <StoryCircle image={Image} name={'ipsum'}/>
            <StoryCircle image={Image} name={'lorem'}/>
            <StoryCircle image={Image} name={'ipsum'}/>

        </div>
    );
}

export default StoriesBar