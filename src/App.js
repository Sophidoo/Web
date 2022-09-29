import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return <>
    <Router>
          <Routes>

              <Route path = "/" element = {<Home/>} />
              <Route path = "/about-us" element = {<About/>} />
              <Route path = "/product" element = {<Product/>} />
              <Route path = "/contact-us" element = {<Contact/>} />

          </Routes>
      </Router>
  </>

}

export default App;
