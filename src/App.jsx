import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Home from "../components/home"


function App() {


  return (
    <>
      <BrowserRouter>

        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App