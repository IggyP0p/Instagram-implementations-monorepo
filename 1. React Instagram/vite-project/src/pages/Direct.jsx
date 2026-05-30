import { NewMessageIcon } from "../components/Icons"
import ChatCard from "../components/ChatCard"
import "../css/direct.css"

function Direct () {
    return (
        <div className="direct-container">
            <div className="contacts-container">
                <div className="info-container">
                    <h4>Username</h4>
                    <NewMessageIcon/>
                </div>
                <form className="search-contacts-container">
                    <input 
                        className="search-contacts-input" type="text" 
                        placeholder="Search"
                    />
                </form>
                <div className="contacts-box">
                    <div className="contacts-box-info"><h3>Messages</h3></div>
                    <ChatCard/>
                    <ChatCard/>
                    <ChatCard/>
                </div>
            </div>
            <div className="message-box">
                <h3>Your messages</h3>
                <h5>Send photos and private messages to a friend or group</h5>
                <button>Send message</button>
            </div>
        </div>
    )
}

export default Direct