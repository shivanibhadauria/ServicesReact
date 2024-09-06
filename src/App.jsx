import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home"
import Services from "./components/Services"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
