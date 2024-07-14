import Landing from "./pages/Landing"
import About from "./pages/Aboutus"
import ContactUs from "./pages/contactus"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
