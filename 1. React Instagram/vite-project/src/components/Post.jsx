import defaultImage from '../assets/Error404.png';
import { HeartIcon, MessageCircleIcon, DirectIcon } from './Icons'
import { StoryCircle } from "./StoriesBar";

function Post({avatar, name, time, commentary, postImage, likesNumber = 0, CommentsNumber = 0}){

    return (
        <div className="post">

            <div className='upper-post-frame'>
                <div className='upper-left-info'>
                    <div className='post-profile-frame'>
                        <StoryCircle name={''} size={1}/>
                    </div>

                    <h5 className="user-name">
                        {name}
                    </h5>

                    <h5 className='post-time'> • </h5>
                    <h5 className='post-time'>
                        {time}
                    </h5>
                </div>
                
            </div>

            <div className='post-image-frame'>
                <img 
                    className="post-image"
                    onClick={onImageClick}
                    src={postImage || defaultImage}
                    alt="No image"
                >

                </img>
            </div>

            <div className='share-bar'>
                <div className='likes-comment-message'>
                    <HeartIcon/>
                    <p>{likesNumber}</p>
                    <MessageCircleIcon/>
                    <p>{CommentsNumber}</p>
                    <DirectIcon/>
                </div>
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
            </div>
            
            <p>
                <b>{name}</b> {commentary}
            </p>
        </div>
    );

    function onImageClick() {
        alert("Clicked")
    }
}

export default Post