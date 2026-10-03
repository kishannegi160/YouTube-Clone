import Navbar from "./component/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Video from "./Pages/Video/Video"
import { Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />

      </Routes>
    </>
  )
}

export default App
