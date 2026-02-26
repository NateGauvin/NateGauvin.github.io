import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./assets/pages/Home.tsx"
import Projects from "./assets/pages/Projects.tsx"
import Contact from "./assets/pages/Contact.tsx";
import About from "./assets/pages/About.tsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/projects"} element={<Projects/>}/>
          <Route path={"/contact-me"} element={<Contact/>}/>
          <Route path={"/about-me"} element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
