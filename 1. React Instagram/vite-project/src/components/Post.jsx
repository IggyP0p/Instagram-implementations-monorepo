import defaultImage from '../assets/defaultUser.png'
import { StoryCircle } from "./StoriesBar";

function Post({avatar, comentario, postImage}){

    return (
        <div className="post">
            <div className='post-profile-frame'>
                <StoryCircle name={'lorem'} size={1}/>
            </div>

            <h3 className="post-title">
                {comentario}
            </h3>

            <div className='post-image-frame'>
                <img 
                    className="post-image"
                    onClick={onImageClick}
                    src={postImage || defaultImage}
                    alt="No image"
                >

                </img>
            </div>
        </div>
    );

    function onImageClick() {
        alert("Clicked")
    }
}

export default Post