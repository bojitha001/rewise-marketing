import gsap from "gsap"
import About from "./Components/About"
import Benefits from "./Components/Benefits"

import FAQ from "./Components/FAQ"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import NavBarNew from "./Components/NavBarNew"
import { ScrollTrigger } from "gsap/all"
import Benifit1 from "./Components/Benifit1"
import Benifit2 from "./Components/Benifit2"
import BenifitText from "./Components/BenifitText"
import Testimonials from "./Components/Testimonials"


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
    <NavBarNew/>
    <Home/>
    <About/>
    <BenifitText/>
    <Benefits/>
    <Benifit1/>
    <Benifit2/>
    <Features/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App
