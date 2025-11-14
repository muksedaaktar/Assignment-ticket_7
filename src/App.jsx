
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Navbar/Banner/Banner'
import Footer from './components/Navbar/Footer/Footer'
import Tickets from './components/Navbar/Tickets'
import { Suspense } from 'react'


const fetchTickets = async ()=>{
  const res = await fetch ("/ticket.json")
  return res.json()
}

function App() {
  const ticketPromise = fetchTickets()

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
      <Tickets ticketPromise={ticketPromise}></Tickets>
    </Suspense>
    <Footer></Footer>
    

     
    </>
  )
}

export default App
