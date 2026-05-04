import defaultProfilePic from "../assets/defaultUser.png"

function ChatCard () {
    return (
        <div 
            className="card-container"
            style={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', 
                gap: '10px',
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '8px'
            }}
        >
            <img
                src={defaultProfilePic}
                style={{
                    width: '63px', height: '63px'
                }}
            />
            <div 
                className="card-info"
                style={{
                    display: 'flex', flexDirection: 'column',
                    gap: '8.5px'
                }}
            >
                <h5 style={{margin: '0px'}}>Username</h5>
                <h6
                    style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center', 
                        gap: '5px', 
                        margin: '0px'
                    }}
                >Last message<b>·</b><b>time</b></h6>
            </div>
        </div>
    )
}

export default ChatCard