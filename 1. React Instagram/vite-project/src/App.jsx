import './css/App.css'
import { Routes, Route } from 'react-router-dom'

import { SearchPanel } from "./components/LeftBox"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Reels from "./pages/Reels"
import Direct from "./pages/Direct"

function App() {
  const loggedUser = 1;

  return (
    <div className='container'>
      <NavBar/>
      <SearchPanel/>
      <main className='main-content'>
        <Routes>
          <Route 
            path='' 
            element={<Home/>}
          />
          <Route 
            path='/' 
            element={<Home/>}
          />
          <Route 
            path='reels' 
            element={<Reels/>}
          />
          <Route 
            path='direct' 
            element={<Direct/>}
          />
        </Routes>
      </main>
    </div>
    
  )
}

export default App
