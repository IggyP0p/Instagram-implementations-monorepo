import defaultImage from '../assets/defaultUser.png'
import { useState } from "react";

export function StoryCircle ({ image, name, size = 1 }) {

    // chossing which will be the size of the Storycircle
    let currentSize;

    switch (size) {
        case 1:
            currentSize = { ring: '34px', frame: '28px', image: '34px' };
            break;
        case 2:
            currentSize = { ring: '88px', frame: '82px', image: '88px' };
            break;
    }

    return (

        <div
            className='story-container'
        >
            <div 
                className='profile-ring'
                style={{ 
                        width: currentSize.ring, height: currentSize.ring, 
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
                        width: currentSize.frame, height: currentSize.frame,
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
                            width: currentSize.image, height: currentSize.image
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

export function StoriesBar () {
    const [Image, setImage] = useState()
    
    return (
        <div 
            className="rolling-stories"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '14.5px',
                marginTop: '15px',
                marginBottom: '40px'
            }}
        >
            <StoryCircle image={Image} name={'lorem'} size={2}/>
            <StoryCircle image={Image} name={'ipsum'} size={2}/>
            <StoryCircle image={Image} name={'lorem'} size={2}/>
            <StoryCircle image={Image} name={'ipsum'} size={2}/>
            <StoryCircle image={Image} name={'lorem'} size={2}/>
            <StoryCircle image={Image} name={'ipsum'} size={2}/>

        </div>
    );
}
