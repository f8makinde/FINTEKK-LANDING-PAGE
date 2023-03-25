import ActiveUsers from './components/ActiveUsers'
import Brands from './components/Brands'
import Faq from './components/Faq'
import FinancialGoals from './components/FinancialGoals'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurServices from './components/OurServices'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Testimonial from './components/Testimonial'
import Email from './components/Email'
import Footer from './components/Footer'
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return(
    <>
      <Navbar />
      <Hero />
      <Brands />
      <ActiveUsers />
      <OurServices />
      <FinancialGoals />
      <Faq />
      <Testimonial />
      <Email />
      <Footer />
    </>
  )

}

export default App
