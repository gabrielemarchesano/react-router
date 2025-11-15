import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutUsPage"
import ProductsPage from "./pages/ProductsPage"
import DefaultLayout from "./layouts/DefaultLayout"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route  path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
