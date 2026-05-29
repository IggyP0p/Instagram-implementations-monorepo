import { useState } from 'react'
import { CloseButtonIcon } from './Icons'
import '../css/leftbox.css'


export function SearchPanel (command = false) {

    const [open, setOpen] = useState(command);

    return <aside
                style={{
                    display: open ? "flex" : 'none'
                }}
            >
            <div 
                className='close-btn-container'
                onClick={() => setOpen(false)}
            >
                <CloseButtonIcon/>
            </div>
            
            <div className="aside-container">
                <h3>Search</h3>
                <input
                    placeholder="Search"
                    type="text"
                />
                <div className="title-diff" >
                    <h4>Recents</h4>
                    <button>Clear search</button>
                </div>
                <div className="searches-container">

                </div>
            </div>
        </aside>
}

export function NotifyPanel () {

    return (
        <aside>
            <h3>Notifications</h3>
            <div className="title-dif">
                <h4>Recents</h4>
                <button>Clear search</button>
            </div>
            <div className="searches-container">

            </div>
        </aside>
    )
}