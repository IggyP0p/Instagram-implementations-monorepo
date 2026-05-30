// I KNOW I COULD REUSE POST FRAME IMAGE BUT THE CSS IS IN THE HOME.CSS, I GOT ISSUES TRYING TO USE THE IMAGE SEPARATED. SO IT IS EASIER THIS WAY
import ErrorLoadingUserImage from "../assets/Error404.png"

export function ImageFrame(img){
    return (
        <div 
            className="image-frame"
            style={{
                width: "300px", height: "392px",
                overflow: "hidden", backgroundColor: "white"
            }}
        >
            <img src={img || ErrorLoadingUserImage}/>
        </div>
    )
}

export default ImageFrame