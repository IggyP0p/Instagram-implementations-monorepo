export function SearchPanel () {

    return (
        <aside>
            <h3>Search</h3>
            <input
                placeholder="Search"
                type="text"
                style={{
                    padding:'10px'
                }}
            />
            <div className="title-dif">
                <h4>Recents</h4>
                <button>Clear search</button>
            </div>
            <div className="searches-container">

            </div>
        </aside>
    )
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