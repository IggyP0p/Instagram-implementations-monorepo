import './css/App.css'

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { Routes, Route } from 'react-router-dom'

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
            path='search' 
            element={<Search/>}
          />

        </Routes>
      </main>
    </div>
    
  )
}

export default App
