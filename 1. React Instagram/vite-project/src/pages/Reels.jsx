import ReelsFrame from "../components/ReelsFrame"
import defaultProfilePic from '../assets/defaultUser.png'
import "../css/reels.css"

function Reels () {
    return (
        <div className="reels-container">

            <div className="reels-info">
                <div className="profile-info">
                    <img
                        src={defaultProfilePic}
                        style={{
                            width: '45px', height: '45px'
                        }}
                    />
                    <h6>username · <b>Seguir</b></h6>
                </div>
                <h5>lorem ipsum assum surd ta imisom tasi w vqm shassi dov bar</h5>
            </div>

            <ReelsFrame/>

            <div 
                className="reels-btn"
                style={{
                    justifySelf: 'flex-end'
                }}
            >
                <button className="btn-back">Sobe</button>
                <button className="btn-next">Desce</button>
            </div>

        </div>

    );
};

export default Reels