import { Routes,Route} from "react-router-dom"
import Home from '../pages/home/index'
import Services from "../pages/service"
import AddReceipt from "../pages/addReceipt"
import Contact from "../pages/contact"
import About from "../pages/about"
import Dashboard from "../pages/dashboard"
import TrackShipment from "../pages/trackShipment"


const Routers = () => {
  return (
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/add-receipt" element={<AddReceipt/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/track-shipment" element={<TrackShipment/>} />
  </Routes>
  )
}

export default Routers
