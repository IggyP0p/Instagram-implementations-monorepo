import "../css/profile.css"
import ImageFrame from "../components/ImageFrame"
import defaultProfilePic from "../assets/defaultUser.png"

function Profile(profilepic, accountName = "Teste", username = "Default da Silva", numberOfPosts = 0, numberOfFollowers = 0, numberOfFollowing = 0, description = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "){
    return(
        <div className="profile-container">

            <div className="profile-info">
                <div className="profile-pic-mold">
                    <img src={profilepic || defaultProfilePic}/>
                </div>
                <div className="account-info">
                    <div className="account-name">{accountName}</div>
                    <div className="user-name">{username}</div>
                    <p className="account-info">{numberOfPosts} posts {numberOfFollowers} followers {numberOfFollowing} following</p>
                    <p className="account-description">{description}</p>
                </div>
            </div>
            <div className="profile-btn">
                <button>Edit Profile</button>
                <button>See Occult Items</button>
            </div>
            <div className="profile-images">
                <div className="images-container">
                    <ImageFrame/>
                    <ImageFrame/>
                    <ImageFrame/>
                </div>
                <div className="images-container">
                    <ImageFrame/>
                    <ImageFrame/>
                </div>
                
            </div>

            <footer>
                
            </footer>
        </div>
    )
}

export default Profile