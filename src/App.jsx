import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Home from "../components/Home"
import Footer from "../components/Footer"


function App() {


  return (
    <>
      <BrowserRouter>

        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
