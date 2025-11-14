import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutUsPage"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
