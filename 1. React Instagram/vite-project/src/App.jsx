import './css/App.css'
import { Routes, Route } from 'react-router-dom'

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Reels from "./pages/Reels"

function App() {
  const loggedUser = 1;

  return (
    <div className='container'>
      <NavBar/>
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
            path='search' 
            element={<Search/>}
          />

        </Routes>
      </main>
    </div>
    
  )
}

export default App
