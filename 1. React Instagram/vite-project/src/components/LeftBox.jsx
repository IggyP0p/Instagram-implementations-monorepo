import { useState, useRef, useEffect } from 'react'
import { CloseButtonIcon } from './Icons'
import '../css/leftbox.css'

function SearchPanel (){
    
    return <div className="aside-container">
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
    
}

function NotifyPanel (){
    return (
        <div className="aside-container">
            <h3>Notifications</h3>
            <div className="title-diff" >
                <h4>Recents</h4>
                <button>Clear search</button>
            </div>
            <div className="searches-container">

            </div>
        </div>
    )
}

function handleCloseTabOnClickingOutside(tab, onClose){
    return(
        useEffect(() => {
            const closeOpenPanel = (e) =>{
                if(tab.current && !tab.current.contains(e.target)){
                    onClose();
                }
            };

            const time = setTimeout(() => {
                document.addEventListener("click", closeOpenPanel);
            }, 0);
            
            return () => {
                clearTimeout(time);
                document.removeEventListener("click", closeOpenPanel);
            };
        }, [onClose])
    )
}

export function OpenPanel ({ onClose, type }) {

    const tab = useRef(null)

    handleCloseTabOnClickingOutside(tab, onClose)
    
    let Panel;

    switch(type){

        case "search":
            Panel = SearchPanel;
            break;

        case "notify":
            Panel = NotifyPanel;
            break;
        
        default:
            Panel = SearchPanel;
            break;

    }

    return <aside ref={tab}>
            <div 
                className='close-btn-container'
                onClick={onClose}
            >
                <CloseButtonIcon/>
            </div>
            
            <Panel/>
            
        </aside>
}

export default OpenPanel