
function Post({avatar, comentario}){

    return (
        <div className="post">
            <img src={avatar} alt="No image">

            </img>
            <h3 className="post-title">
                {comentario}
            </h3>
            <img 
                className="post-image"
                onClick={onImageClick}
                alt="No image"
            >

            </img>
        </div>
    );

    function onImageClick() {
        alert("Clicked")
    }
}

export default Post