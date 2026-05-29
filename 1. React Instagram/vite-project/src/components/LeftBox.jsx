import { useState, useRef, useEffectEvent } from 'react'
import { CloseButtonIcon } from './Icons'
import '../css/leftbox.css'


export function SearchPanel ({ onClose }) {


    return <aside>
            <div 
                className='close-btn-container'
                onClick={onClose}
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

    const [open, setOpen] = useState(false);

    return (
        <aside
                style={{
                    display: open ? "flex" : 'none'
                }}
            >
            <div 
                className='close-btn-container'
                onClick={() => setOpen(!open)}
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
    )
}