import ActiveUsers from './components/ActiveUsers'
import Brands from './components/Brands'
import Faq from './components/Faq'
import FinancialGoals from './components/FinancialGoals'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurServices from './components/OurServices'

function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Brands />
      <ActiveUsers />
      <OurServices />
      <FinancialGoals />
      <Faq />
    </>
  )

}

export default App
