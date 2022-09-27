import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return <>
    <Router>
          <Routes>

              <Route path = "/" element = {<Home/>} />
              <Route path = "/about-us" element = {<About/>} />
              <Route path = "/product" element = {<Product/>} />

          </Routes>
      </Router>
  </>

}

export default App;
