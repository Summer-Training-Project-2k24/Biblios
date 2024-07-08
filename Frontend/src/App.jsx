import Landing from "./pages/Landing"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
