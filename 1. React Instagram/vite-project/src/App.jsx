import './App.css'

import Home from "./pages/Home"
import Post from "./components/Post"

function App() {
  const loggedUser = 1;

  return (
    /* This here is a 'fragment'. since jsx can't return a function with more than 1 'parent'. A placeholder actually. */
    <>

      {loggedUser === 0 ?(
        <Post comentario={"Sebastiao"}></Post>
      ) : (
        <>
          <Home/>
        </>
      )} 

    </>
  )
}

export default App
